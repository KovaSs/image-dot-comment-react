import React from 'react';

import { Gallery, SelectedImage } from './containers';
import { SettingsContext } from './context';
import { useSettings } from './hooks';

const App = () => {
  const state = useSettings();

  return (
    <SettingsContext.Provider value={state}>
      <Gallery />
      <SelectedImage />
    </SettingsContext.Provider>
  );
};

export default App;
