import React, { useContext } from 'react';

import BlankCenterDiv from './BlankCenterDiv';
import { SettingsContext } from '../context';
import { timeDifference } from '../utility';
import styles from '../styles';

const style = styles.AllComments;

const  AllComments = () => {
  const {
    setSelectedPoint,
    showAllComments,
    selectedPoint,
    selectedImage,
    dimensions,
    comments,
  } = useContext(SettingsContext);

  const imageComments = comments[selectedImage.id];

  const bodyStyle = showAllComments ? style.main : style.mainHidden;

  const showImageComments = () => {
    if (!imageComments.length) return <BlankCenterDiv text="No Comments" />;

    return imageComments.map((comment) => (
      <div
      style={comment.pointId === selectedPoint ?  style.selectedCommentComponent : style.commentComponent}
        key={comment.id}
        onClick={event => {
          event.stopPropagation();
          setSelectedPoint(comment.pointId);
        }}
      >
        <div style={style.commentBody}>
          <span style={style.commentUser}>{comment.user}</span>
          <span style={style.commentTime}>{timeDifference(comment.time)}</span>
        </div>
        <span style={style.commentSpan}>{comment.comment}</span>
      </div>
    ));
  } 

  return (
    <div style={{ ...bodyStyle, height: dimensions.height }}>
      <span style={style.header}>All Comments</span>
      {showImageComments()}
    </div>
  );
}

export default AllComments;
