import { RECEIVE_SUBMISSION,
         RESET_STATE2} from '../actions/submission_actions';

const SubmissionReducer = (state = {}, action) => {
  let newState = {};
  switch(action.type) {
    case RECEIVE_SUBMISSION:
      newState = action.submission;
      return newState;
    case RESET_STATE2:
      return newState;
    default:
      return state;
  }
};

export default SubmissionReducer;
