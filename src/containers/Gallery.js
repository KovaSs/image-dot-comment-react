import React, { useContext } from 'react';

import ImagePicker from '../components/ImagePicker';
import SingleImage from '../components/SingleImage';
import { SettingsContext } from '../context';
import styles from '../styles';

const style = styles.Gallery;

export const Gallery  = () => {
  const { images, setSelectedPoint } = useContext(SettingsContext);

  return (
    <div
      style={style.main}
      onClick={() => {
        setSelectedPoint(null);
      }}
    >
      <ImagePicker />
      <div style={style.images}>
        {images.map(image => <SingleImage key={image.id} image={image} />)}
      </div>
    </div>
  );
};
