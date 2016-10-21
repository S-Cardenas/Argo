import { REQUEST_SUBMISSIONS,
         RECEIVE_SUBMISSIONS,
         REQUEST_SUBMISSION,
         RESET_STATE,
         receiveSubmissions,
         receiveSubmission,
         receiveResetState } from '../actions/submission_actions.js';

import { REQUEST_SEARCH } from '../actions/search_actions.js';

import { fetchSubmissions,
         fetchSubmission,
         fetchSearch } from '../util/api_util';

export default ({ getState, dispatch }) => next => action => {
  const submissionsSuccess = (data) => dispatch(receiveSubmissions(data));
  const submissionSuccess = (data) => dispatch(receiveSubmission(data));
  const error = (e) => console.log(e);

  switch(action.type) {
    case REQUEST_SUBMISSIONS:
      fetchSubmissions(action.query, submissionsSuccess, error);
      break;
    case REQUEST_SUBMISSION:
      fetchSubmission(action.data, submissionSuccess, error);
      break;
    case REQUEST_SEARCH:
      fetchSearch(action.query, submissionsSuccess, error);
      break;
    case RESET_STATE:
      console.log('middleware')
      dispatch(receiveResetState());
      break;
    default:
      next(action);
  }
};
