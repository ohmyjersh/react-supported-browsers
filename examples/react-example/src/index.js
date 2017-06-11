import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotSupported from './NotSupported';
import registerServiceWorker from './registerServiceWorker';
import GateKeeper from 'zuul';

const supported = {
  browsers: [
    {
      browser: 'chrome',
      version: '59',
    },
    {
      browser: 'safari',
      version: '9',
    },
    {
      browser: 'ie',
      version: '9',
    },
    {
      browser: 'edge',
      version: '12',
    },
    {
      browser: 'firefox',
      version: '46',
    },
  ],
  required: true,
};

ReactDOM.render(
  GateKeeper(<App />, <NotSupported />, supported),
  document.getElementById('root')
);
registerServiceWorker();
