import { connect } from 'react-redux';
import SearchResults from './search_results';

import { allSubmissions } from '../../reducers/selector.js';
import { requestSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  submissions: allSubmissions(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestSearch: (query) => dispatch(requestSearch(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
