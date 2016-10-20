import { REQUEST_SUBMISSIONS,
         RECEIVE_SUBMISSIONS,
         receiveSubmissions } from '../actions/submission_actions.js';

import { fetchSubmissions } from '../util/api_util';

export default ({ getState, dispatch }) => next => action => {
  const submissionsSuccess = (data) => dispatch(receiveSubmissions(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_SUBMISSIONS:
      fetchSubmissions(action.query, submissionsSuccess, error);
      break;
    default:
      next(action);
  }
};
