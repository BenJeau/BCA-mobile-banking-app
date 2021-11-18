import React from 'react';

import { RootStack } from './navigation';
import Provider from './utils/Provider';

const App: React.FC = () => (
  <Provider>
    <RootStack />
  </Provider>
);

export default App;
