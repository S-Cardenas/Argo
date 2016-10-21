import React from 'react';
import { hashHistory } from 'react-router';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: "",
      insuredName: "",
      underwriterName: "",
      minQuoteDate: "",
      maxQuoteDate: "",
      page: 0,
      sort: 'RECEIVED_DATE'
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit() {
    return(e) => {
      e.preventDefault();
      hashHistory.push({
        pathname: '/search',
        query: this.state,
        state: {}
      });
    };
  }

  render() {
    return(
      <div className="search-form-container">
        <h1>Search Submissions</h1>
        <form className="search-form" onSubmit={this.handleSubmit()}>

          <label>Agent Name</label>
          <input
            className="input-text"
            ref="agent"
            value={this.state.agent}
            placeholder="John Doe"
            onChange={this.update('agent')}/>

          <label>Insured Name</label>
          <input
            className="input-text"
            ref="insured name"
            value={this.state.insuredName}
            placeholder="Jane Doe"
            onChange={this.update('insuredName')}/>

          <label>Underwriter Name</label>
          <input
            className="input-text"
            ref="underwriter name"
            value={this.state.underwriterName}
            placeholder="Thomas Anderson"
            onChange={this.update('underwriterName')}/>

          <br/>

          <label>Earliest Quote Date</label>
          <input
            type="date"
            className="input-date"
            onChange={this.update('minDate')}/>

          <label> Latest Quote Date</label>
          <input
            type="date"
            className="input-date"
            onChange={this.update('maxDate')}/>

          <br/>

          <button className="search-button">Search!</button>
        </form>
      </div>
    );
  }

}

export default SearchForm;
