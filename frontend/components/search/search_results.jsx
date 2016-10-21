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
    var list = submissions.map(submission => {
      return (
        <div className="submission-item group" key={submission.ID}>
          <Link to={"/submisions/" + submission.ID}>
            <ul className="submission-listing">
              <li>
                ID: {submission.ID}
              </li>
              <li>
                Agent Name: {submission.AGENT_NAME}
              </li>
              <li>
                Agent Code: {submission.AGENT_CODE}
              </li>
              <li>
                Underwrite Name: {submission.UNDERWRITER_NAME}
              </li>
              <li>
                Operating Unit Name: {submission.OPERATING_UNIT_NAME}
              </li>
              <li>
                Received Date: {submission.RECEIVED_DATE}
              </li>
              <li>
                Quoted Date: {submission.QUOTED_DATE}
              </li>
              <li>
                Program: {submission.PROGRAM}
              </li>
              <li>
                Insured Name: {submission.INSURED_NAME}
              </li>

            </ul>
          </Link>
        </div>
      );
    });

    return (
      <div className="app">
        <h1 className="main-header">Argo Digital</h1>
        <div className="sort-by-container">
          <select className="dropdown-select" onChange={this.sortBy}>
            <option selected disabled>SORT BY</option>
            <option value="AGENT_NAME">AGENT NAME</option>
            <option value="RECEIVED_DATE">RECEIVED DATE</option>
            <option value="QUOTED_DATE">QUOTED DATE</option>
            <option value="BUSINESS_UNIT_NAME">BUSINESS UNIT NAME</option>
          </select>
        </div>
        <ul>
          {list}
        </ul>
        <div className="next-button" onClick={this.migrate}>Next</div>
      </div>
    );
  }
}

export default SearchResults;
