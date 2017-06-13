import Vue from 'vue';
import App from './App.vue';
import NotSupported from './NotSupported.vue';
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

new Vue({
  el: '#app',
  render: h => h(GateKeeper(App, NotSupported, supported)),
});
