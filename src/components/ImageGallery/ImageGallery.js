import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';

import s from './ImageGallery.module.css';
import fetchPictures from '../../services/getPictures';
import ImageGalleryItem from './ImageGalleryItem';
import Button from 'components/Button';
import Modal from 'components/Modal';
// import usePictureApi from 'hooks/usePicturesApi';

function ImageGallery({ searchName }) {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [bigImg, setBigImg] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  // const { pictures, error, status } = usePictureApi(searchName, page);

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    setStatus('pending');

    fetchPictures(searchName, page)
      .then(data => {
        if (data.hits.length > 0) {
          setPictures(prevPictures => [...prevPictures, ...data.hits]);
          setStatus('resolved');
        } else {
          setStatus('idle');
          toast.error('Enter correct querry');
        }
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [page, searchName]);

  const handleClick = e => {
    e.preventDefault();
    setPage(prevPage => prevPage + 1);
  };

  const openModal = e => {
    if (e.target === e.currentTarget) {
      return;
    }

    setVisible(true);
    setBigImg(e.target.dataset.source);

    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setVisible(false);
    document.body.style.overflow = 'scroll';
  };

  if (status === 'idle') {
    return <></>;
  }

  if (status === 'pending') {
    return (
      <div className={s['Loader']}>
        <Loader type="Rings" color="#00BFFF" height={100} width={100} />;
      </div>
    );
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ul className={s['ImageGallery']} onClick={openModal}>
          {pictures.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id} className={s['ImageGalleryItem']}>
              <ImageGalleryItem
                imgUrl={webformatURL}
                bigImgUrl={largeImageURL}
              />
            </li>
          ))}
        </ul>
        <Button onClick={handleClick} />

        {visible && (
          <Modal onClose={closeModal}>
            <button
              className={s['Button']}
              type="button"
              onClick={closeModal}
            ></button>
            <img src={bigImg} alt="" width="560" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
