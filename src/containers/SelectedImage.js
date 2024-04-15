import React, { useContext } from 'react';

import BlankCenterDiv from '../components/BlankCenterDiv';
import ImagePreview from '../components/ImagePreview';
import ImageHeader from '../components/ImageHeader';
import AllComments from '../components/AllComments';
import { SettingsContext } from '../context';
import styles from '../styles';

const style = styles.SelectedImage;

export const SelectedImage = () => {
  const {
    showAllComments,
    showPoints,
    dimensions,
    images,
    setSelectedPoint,
    toggleOptions,
  } = useContext(SettingsContext);

  if (!images.length) return <BlankCenterDiv text="Please Select a Picture or Upload a Image" />;

  const paddingLeft = `${Math.round((window.innerWidth - dimensions.width) / 2)}px`;

  return (
    <div
      style={style.main}
      onClick={event => {
        event.stopPropagation();
        setSelectedPoint(null);
      }}
    >
      <div style={style.imageBody}>
        <ImageHeader />
        <div style={style.settingsWrapper}>
          <button
            className="simpleButton"
            onClick={() => {
              toggleOptions('showPoints', !showPoints);
            }}
          >
            {showPoints ? 'Hide Points' : 'Show Points'}
          </button>
          <button
            className="simpleButton"
            onClick={() => {
              toggleOptions('showAllComments', !showAllComments);
            }}
          >
            {showAllComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
        <div
          style={{
            height: dimensions.height,
            ...style.imageWrapper,
            paddingLeft
          }}
        >
          <ImagePreview />
        </div>
      </div>
      <AllComments />
    </div>
  );
};
