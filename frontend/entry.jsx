//React
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  window.store  = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
});
