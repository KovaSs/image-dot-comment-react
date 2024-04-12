import React, { useContext } from 'react';

import { SettingsContext } from '../context';
import PointComments from './PointComments';
import { getPointData } from '../utility';
import { colors } from '../styles';

const pointRadius = 5;

const Point = ({ id }) => {
  const {
    setSelectedPoint,
    selectedPoint,
    dimensions,
    showPoints,
  } = useContext(SettingsContext);

  const { width, height } = getPointData({ id, dimensions });

  const marginTop = height - pointRadius;
  const marginLeft = width - pointRadius;

  const backgroundColor = showPoints
    ? selectedPoint === id ? colors.selectedPoint : colors.primary
    : colors.transparent;
  
  return (
    <div
      style={{
        position: 'absolute',
        marginLeft,
        marginTop,
      }}
    >
      <div
        style={{
          width: pointRadius * 2,
          height: pointRadius * 2,
          borderRadius: '50%',
          backgroundColor,
        }}
        onClick={event => {
          event.stopPropagation();
          setSelectedPoint(id === selectedPoint ? null : id);
        }}
      />
      <PointComments pointId={id} />
    </div>
  );
};

export default Point;
