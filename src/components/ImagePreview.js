import React, { useContext, useRef } from 'react';
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
    selectedPoint,
    selectedImage,
    showPoints,
    dimensions,
    newPoint,
    points,
    setSelectedPoint,
    setDimensions,
    setNewPoint,
  } = useContext(SettingsContext);

  const imagePoints = points[selectedImage.id];


  const setComment = (event) => {
    event.stopPropagation();
    const newPoint = setPoint(dimensions, currentPositionRef.current);
    if (newPoint) setNewPoint(newPoint);
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
                  {newPoint && (
                    <Point
                      setSelectedPoint={setSelectedPoint}
                      selectedPoint={selectedPoint}
                      dimensions={dimensions}
                      showPoints={showPoints}
                      key={newPoint}
                      id={newPoint}
                      newPoint
                    />
                  )}
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
