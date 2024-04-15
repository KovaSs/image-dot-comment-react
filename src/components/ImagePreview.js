import React, { useContext, useEffect, useRef } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import Measure from 'react-measure';

import { SettingsContext } from '../context';
import { setPoint } from '../utility';
import styles from '../styles';
import Point from './Point';

const style = styles.ImagePreview;

const ImagePreview = () => {
  const currentPositionRef = useRef();

  const {
    selectedImage,
    selectedPoint,
    dimensions,
    newPoint,
    points,
    setDimensions,
    setNewPoint,
  } = useContext(SettingsContext);

  const imagePoints = points[selectedImage.id];

  const setComment = (event) => {
    event.stopPropagation();
    const newPointComment = setPoint(dimensions, currentPositionRef.current);
    if (newPointComment) setNewPoint(newPointComment);
  };

  return (
    <div style={style.main}>
      <Measure bounds onResize={(measure) => setDimensions(measure.bounds)}>
        {({ measureRef }) => (
          <div>
            <ReactCursorPosition
              onPositionChanged={(currentPosition) => (currentPositionRef.current = currentPosition)}
            >
              <div onClick={setComment}>
                <div style={style.commentDiv}>
                  <img
                    style={style.mainImage}
                    src={selectedImage.file}
                    ref={measureRef}
                    alt="#"
                  />
                </div>
                <div style={style.commentDiv}>
                  {imagePoints.map((point) => <Point key={point} id={point} />)}
                  {selectedPoint === newPoint && <Point id={newPoint} newPoint />}
                </div>
              </div>
            </ReactCursorPosition>
          </div>
        )}
      </Measure>
    </div>
  );
};

export default ImagePreview;
