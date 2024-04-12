import React, { useContext } from 'react';

import { SettingsContext } from '../context/SettingsContext';
import { timeDifference } from '../utility';
import InputSearch from './InputSearch';
import styles from '../styles';


const style = styles.PointComments;

const PointComments = ({ pointId }) => {
  const {
    setComments,
    selectedImage,
    selectedPoint,
    newPoint,
    comments,
    points,
  } = useContext(SettingsContext);

  if (selectedPoint !== pointId) return <div />;

  const selectedImageId = selectedImage.id;
  const selectedComments = comments[selectedImageId];
  const thisPointComments = selectedComments.filter((comment) => comment.pointId === selectedPoint);
  const selectedPoints = points[selectedImageId];

  const commentComponent = comment => (
    <div style={style.commentComponent} key={comment.id}>
      <div style={style.commentBody}>
        <span style={style.commentUser}>{comment.user}</span>
        <span style={style.commentTime}>{timeDifference(comment.time)}</span>
        <span
          style={style.commentDelete}
          onClick={event => {
            event.stopPropagation();
            const newPoints =
              thisPointComments.length === 1
                ? selectedPoints.filter((point) => point !== pointId)
                : selectedPoints;
            const newComments = selectedComments.filter((singleComment) => singleComment.id !== comment.id);
            setComments(selectedImageId, newPoints, newComments, pointId);
          }}
        >
          X
        </span>
      </div>
      <span style={style.commentSpan}>{comment.comment}</span>
    </div>
  );

  return (
    <div
      onClick={event => {
        event.stopPropagation();
      }}
      style={style.main}
    >
      <div style={style.header}>
        <span style={style.headerSpan}>
          {newPoint ? 'Add comment' : 'Comments'}
        </span>
      </div>
      <div style={style.commentsWrapper}>
        {thisPointComments.map(commentComponent)}
      </div>
      <InputSearch
        autoFocus
        clearOnSearch
        placeholder="comment here"
        style={style.input}
        onSearch={comment => {
          if (comment) {
            const newComment = {
              time: new Date().getTime(),
              id: new Date().getTime(),
              user: 'User',
              comment,
              pointId
            };
            const newComments = [newComment, ...selectedComments];
            const newPoints = newPoint ? [pointId, ...selectedPoints] : selectedPoints;
            setComments(selectedImageId, newPoints, newComments);
          }
        }}
      />
    </div>
  );
};

export default PointComments;
