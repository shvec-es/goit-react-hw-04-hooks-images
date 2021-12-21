import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderRings from 'components/Loader/Loader';

import fetchPictures from './services/getPictures';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';

function App() {
  const [searchName, setSearchName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [bigImg, setBigImg] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    setStatus('pending');

    fetchPictures(searchName, page)
      .then(data => {
        if (data.hits.length > 0) {
          setStatus('resolved');
          setPictures(prevPictures => [...prevPictures, ...data.hits]);
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

  const handleSearchbar = searchName => {
    setSearchName(searchName);
    setStatus('pending');
    setPictures([]);
    setPage(1);
  };

  const handleClick = () => {
    setStatus('pending');
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

  return (
    <div>
      <ToastContainer autoClose={3000} theme="colored" />
      <Searchbar onSubmit={handleSearchbar} />
      {status === 'pending' && <LoaderRings />}
      {status === 'rejected' && <h1>{error.message}</h1>}
      {status === 'resolved' && (
        <>
          <ImageGallery pictures={pictures} onClick={openModal} />
          <Button onClick={handleClick} />
        </>
      )}
      {visible && <Modal bigImg={bigImg} onClose={closeModal} />}
    </div>
  );
}

export default App;
