import React, { useContext, useEffect, useState } from 'react';

import { SettingsContext } from '../context';
import { InputSearch } from './InputSearch';
import styles from '../styles';

const style = styles.ImageHeader;

const ImageHeader = () => {
  const { selectedImage, setSelectedPoint, deleteImage, editImage } = useContext(SettingsContext);

  const [name, setName] = useState(selectedImage.name);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    setName(selectedImage.name);
    setIsEditable(false);
  }, [selectedImage.name]);


  if (isEditable) {
    return (
      <div style={style.main}>
        <InputSearch
          defaultValue={name}
          placeholder="Select Name"
          onSearch={name => {
            editImage({ ...selectedImage, name });
            setName(name);
            setIsEditable(false);
          }}
          autoFocus
        />
      </div>
    );
  }

  return (
      <div style={style.main}>
        <div style={style.name}>{name || 'No Name'}</div>
        <div style={{ display: 'flex' }}>
          <button
            className="simpleButton"
            style={style.editButton}
            onClick={event => {
              event.stopPropagation();
              setIsEditable(true);
              setSelectedPoint(null);
            }}
          >
            Edit
          </button>
          <button
            className="simpleButton"
            style={style.deleteButton}
            onClick={() => deleteImage(selectedImage)}
          >
            Delete
          </button>
        </div>
      </div>
    );
};

export default ImageHeader;
