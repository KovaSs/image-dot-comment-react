import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = document.createElement('div');
root.setAttribute('id', 'main');
document.body.insertBefore(root, document.body.children[0]);
const rootReact = ReactDOM.createRoot(root);

rootReact.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
