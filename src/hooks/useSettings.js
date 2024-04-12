import { useState } from 'react';

import { setLocalData, getLocalData } from '../utility';


const initState = getLocalData();

export function useSettings () {
  const [state, setState] = useState(initState);

  const addImage = (file) => {
    setState((prev) => {
      const id = new Date().getTime();
      const newImage = { id, file };

      const newState = {
        ...prev,
        comments: { ...prev.comments, [id]: [] },
        points: { ...prev.points, [id]: [] },
        images: [newImage, ...prev.images],
        selectedImage: newImage,
        selectedPoint: null,
        newPoint: null,
      }

      const error = setLocalData(newState);

      if (error) {
        alert(error);
        return prev;
      };
      return newState;
    });
  };

  const changSelectedImage = (file) => {
    setState((prev) => {
      const newState = {
        ...prev,
        selectedPoint: null,
        selectedImage: file,
        newPoint: null,
      };
      setLocalData(newState);
      return newState;
    });
  };

  const setDimensions = (dimensions) => {
    setState((prev) => ({ ...prev, dimensions }));
  };

  const setNewPoint = (newPoint) => {
    setState((prev) => ({ ...prev, newPoint, selectedPoint: newPoint }));
  };

  const setSelectedPoint = (selectedPoint) => {
    setState((prev) => ({ ...prev, selectedPoint }));
  };

  const setComments = (selectedImageId, points, comments, newPoint) => {
    setState((prev) => {
      const newState = {
        ...prev,
        comments: { ...prev.comments, [selectedImageId]: comments },
        points: { ...prev.points, [selectedImageId]: points },
        newPoint,
      };
      setLocalData(newState);
      return newState;
    });
  };

  const deleteImage = (image) => {
    setState((prev) => {
      const updateImages = prev.images.filter((el) => el.id !== image.id);
      const newState = {
        ...prev,
        comments: { ...prev.comments, [image.id]: []},
        points: { ...prev.points, [image.id]: []},
        selectedImage: updateImages[0],
        images: updateImages,
      };
      setLocalData(newState);
      return newState;
    });
  }

  const toggleOptions = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const editImage = (image) => {
    setState((prev) => {
      const newState = {
        ...prev,
        images: prev.images.map((el) => el.id === image.id ? image : el),
      };
      setLocalData(newState);
      return newState;
    })
  }

  return {
    ...state,
    changSelectedImage,
    setSelectedPoint,
    toggleOptions,
    setDimensions,
    setComments,
    deleteImage,
    setNewPoint,
    editImage,
    addImage,
  };
};
