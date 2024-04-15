import React from 'react';

import { Gallery, SelectedImage } from './containers';
import { SettingsContext } from './context';
import { useSettings } from './hooks';

const App = () => {
  const context = useSettings();

  return (
    <SettingsContext.Provider value={context}>
      <Gallery />
      <SelectedImage />
    </SettingsContext.Provider>
  );
};

export default App;
