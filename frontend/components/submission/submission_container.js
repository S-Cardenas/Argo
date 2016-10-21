import { connect } from 'react-redux';
import Submission from './submission';

import { currentSubmission } from '../../reducers/selector.js';
import { requestSubmission,
          resetState } from '../../actions/submission_actions';

const mapStateToProps = (state) => ({
  submission: currentSubmission(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSubmission: (data) => dispatch(requestSubmission(data)),
  resetState: () => dispatch(resetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Submission);
