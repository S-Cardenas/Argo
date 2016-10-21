import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SubmissionListContainer from './submission_list/submission_list_container';
import SearchListContainer from './search/search_list_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" >
        <IndexRoute component={App}/>
        <Route path="/submissions" component={SubmissionListContainer} />
        <Route path="/search" component={SearchListContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
