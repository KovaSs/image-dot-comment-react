import React, { useContext } from 'react';

import { SettingsContext } from '../context';
import styles from '../styles';

const style = styles.SingleImage;

const SingleImage = ({ image }) => {
  const { changSelectedImage } = useContext(SettingsContext);

  const onChangeSingleImage = (event) => {
    event.preventDefault();
    changSelectedImage(image);
  };

  return (
    <button
      onClick={onChangeSingleImage}
      style={style.button}
      type="button"
    >
      <img alt="#" style={style.image} src={image.file} />
      <span style={style.name}>{image.name || 'No Name'}</span>
    </button>
  );
}

export default SingleImage;
