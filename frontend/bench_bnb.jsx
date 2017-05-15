import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser){
    const preloadedState = { session: {currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});

import * as BenchAPIUtil from './util/bench_api_util';
import {requestBenches} from './actions/bench_actions';
window.requestBenches = requestBenches;
