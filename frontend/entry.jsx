//React
import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './components/search/search_form';

const App = () => (
  <div>Hello World</div>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<SearchForm />, document.getElementById('content'));
});
