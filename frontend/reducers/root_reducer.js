import { combineReducers } from 'redux';
import SubmissionsReducer from './submissions_reducer';
import SubmissionReducer from './submission_reducer';


const RootReducer = combineReducers({
  submissions: SubmissionsReducer,
  currentSubmission: SubmissionReducer
});

export default RootReducer;
