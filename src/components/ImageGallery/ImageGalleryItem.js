import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ imgUrl, bigImgUrl }) => {
  return (
    <>
      <img
        className={s['ImageGalleryItem-image']}
        src={imgUrl}
        alt=""
        data-source={bigImgUrl}
      />
    </>
  );
};

ImageGalleryItem.propTypes = {
  imgUrl: PropTypes.string,
  bigImgUrl: PropTypes.string,
};

export default ImageGalleryItem;
