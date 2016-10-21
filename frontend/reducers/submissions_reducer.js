import { RECEIVE_SUBMISSIONS,
         RECEIVE_SUBMISSION,
         RESET_STATE} from '../actions/submission_actions';

const SubmissionsReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_SUBMISSIONS:
      action.submissions.forEach(submission => newState[submission.ID] = submission);
      return newState;
    default:
      return state;
  }
};

export default SubmissionsReducer;
