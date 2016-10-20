import { RECEIVE_SUBMISSIONS } from '../actions/submission_actions';

const SubmissionsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SUBMISSIONS:
      let newState = {};
      action.submissions.forEach(submission => newState[submission.ID] = submission);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default SubmissionsReducer;
