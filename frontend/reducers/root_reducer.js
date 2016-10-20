import { combineReducers } from 'redux';
import SubmissionsReducer from './submissions_reducer';


const RootReducer = combineReducers({
  submissions: SubmissionsReducer
});

export default RootReducer;
