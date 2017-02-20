import React from 'react';

import Documentviewer from '../src';

import url from './test.pdf';

const App = () => (
  <div>
    <Documentviewer url={url} />
  </div>
);

export default App;
