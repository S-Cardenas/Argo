import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

class SearchResults extends React.Component {

  constructor() {
    super();
    this.migrate = this.migrate.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    this.props.requestSearch(this.props.location.query);
  }

  migrate() {
    var nextPage = parseInt(this.props.location.query.page) + 1;
    var query = {
      agent: this.props.location.query.agent,
      insuredName: this.props.location.query.insuredName,
      underwriterName: this.props.location.query.underwriterName,
      minQuoteDate: this.props.location.query.minQuoteDate,
      maxQuoteDate: this.props.location.query.maxQuoteDate,
      page: nextPage,
      sort: this.props.location.query.sort
    };

    hashHistory.push({
      pathname: '/search',
      query: query,
      state: {}
    });

    this.props.requestSearch(query);
  }

  sortBy(e) {
    e.preventDefault();
    var query = {
      agent: this.props.location.query.agent,
      insuredName: this.props.location.query.insuredName,
      underwriterName: this.props.location.query.underwriterName,
      minQuoteDate: this.props.location.query.minQuoteDate,
      maxQuoteDate: this.props.location.query.maxQuoteDate,
      page: 0,
      sort: e.currentTarget.value
    };

    hashHistory.push({
      pathname: '/search',
      query: query,
      state: {}
    });

    this.props.requestSearch(query);
  }

  render() {
    const { submissions } = this.props;
    var list  = submissions.map(submission => <li key={submission.ID}>{submission.AGENT_NAME}</li>);

    return (
      <div>
        <select className="dropdown-select" onChange={this.sortBy}>
          <option selected disabled>SORT BY</option>
          <option value="AGENT_NAME">AGENT NAME</option>
          <option value="RECEIVED_DATE">RECEIVED DATE</option>
          <option value="QUOTED_DATE">QUOTED DATE</option>
          <option value="BUSINESS_UNIT_NAME">BUSINESS UNIT NAME</option>
        </select>
        <ul>
          {list}
        </ul>
        <div onClick={this.migrate}>Next</div>
      </div>
    );
  }
}

export default SearchResults;
