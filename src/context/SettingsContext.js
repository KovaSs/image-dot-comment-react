import { createContext } from 'react'

const noop = () => {};

export const SettingsContext = createContext({
  // state
  selectedImage: '',
  dimensions: {},
  comments: {},
  images: [],
  points: {},
  showAllComments: false,
  selectedPoint: null,
  showPoints: true,
  newPoint: null,
  // actions
  changSelectedImage: noop,
  setSelectedPoint: noop,
  setDimensions: noop,
  toggleOptions: noop,
  deleteImage: noop,
  setComments: noop,
  setNewPoint: noop,
  editImage: noop,
  addImage: noop,
})