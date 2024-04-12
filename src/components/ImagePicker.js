import React, { useContext } from 'react';

import { SettingsContext } from '../context';

const ImagePicker = () => {
  const context = useContext(SettingsContext);

  const handleImageChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      if (reader.result) {
        context.addImage(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="fileUpload">
      <span className="fileText">+</span>
      <span className="spanUpload">upload</span>
      <input
        onChange={handleImageChange}
        className="inputUpload"
        type="file"
      />
    </div>
  );
};

export default ImagePicker;
