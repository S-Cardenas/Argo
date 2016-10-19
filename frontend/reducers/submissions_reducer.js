import { RECEIVE_SUBMISSIONS } from '../actions/submission_actions';

const SubmissionsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SUBMISSIONS:
      let newState = {};
      action.submissions.forEach(submission => newState[submission.id] = submission);
      return newState;
    default:
      return state;
  }
};

export default SubmissionsReducer;
