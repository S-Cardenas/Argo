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
      minReceivedDate: this.props.location.query.minReceivedDate,
      maxReceivedDate: this.props.location.query.maxReceivedDate,
      quotedStatus: this.props.location.query.quotedStatus,
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
      minReceivedDate: this.props.location.query.minReceivedDate,
      maxReceivedDate: this.props.location.query.maxReceivedDate,
      quotedStatus: this.props.location.query.quotedStatus,
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
          <Link to={"/submissions/" + submission.ID}>
            <ul className="submission-listing">
              <li>
                <b>ID: </b>
                {submission.ID}
              </li>
              <li>
                <b>Agent Name: </b>
                 {submission.AGENT_NAME}
              </li>
              <li>
                <b>Agent Code: </b>
                {submission.AGENT_CODE}
              </li>
              <li>
                <b>Underwrite Name: </b>
                {submission.UNDERWRITER_NAME}
              </li>
              <li>
                <b>Operating Unit Name: </b>
                {submission.OPERATING_UNIT_NAME}
              </li>
              <li>
                <b>Received Date: </b>
                {submission.RECEIVED_DATE}
              </li>
              <li>
                <b>Quoted Date: </b>
                {submission.QUOTED_DATE}
              </li>
              <li>
                <b>Program: </b>
                {submission.PROGRAM}
              </li>
              <li>
                <b>Insured Name: </b>
                {submission.INSURED_NAME}
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
            <option value="OPERATING_UNIT_NAME">OPERATING UNIT NAME</option>
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
