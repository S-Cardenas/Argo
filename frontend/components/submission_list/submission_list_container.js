import { connect } from 'react-redux';
import SubmissionList from './submission_list';

import { allSubmissions } from '../../reducers/selector.js';
import { requestSubmissions,
         resetState } from '../../actions/submission_actions';

const mapStateToProps = (state) => ({
  submissions: allSubmissions(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSubmissions: (query) => dispatch(requestSubmissions(query)),
  resetState: () => dispatch(resetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmissionList);
