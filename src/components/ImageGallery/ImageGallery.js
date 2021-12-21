import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ pictures, onClick }) {
  return (
    <>
      <ul className={s['ImageGallery']} onClick={onClick}>
        {pictures.map(({ id, webformatURL, largeImageURL }) => (
          <li key={id} className={s['ImageGalleryItem']}>
            <ImageGalleryItem imgUrl={webformatURL} bigImgUrl={largeImageURL} />
          </li>
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
