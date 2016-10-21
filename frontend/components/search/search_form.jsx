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
    console.log(this.state);
    return(
      <form className="search-form" onSubmit={this.handleSubmit()}>
        <h1>Search Submissions</h1>
        <label>Agent Name
          <input
            className="input agent-name"
            ref="agent"
            value={this.state.agent}
            placeholder="John Doe"
            onChange={this.update('agent')}/>
        </label>
        <label>Insured Name
          <input
            className="input insured-name"
            ref="insured name"
            value={this.state.insuredName}
            onChange={this.update('insuredName')}/>
        </label>
        <label>Underwriter Name
          <input
            className="input under-name"
            ref="underwriter name"
            value={this.state.underwriterName}
            onChange={this.update('underwriterName')}/>
        </label>
        <label>Earliest Quote Date
          <input
            type="date"
            onChange={this.update('minDate')}/>
        </label>
        <label> Latest Quote Date
          <input
            type="date"
            onChange={this.update('maxDate')}/>
        </label>


        <button className="create-button">Search!</button>
      </form>
    );
  }

}

export default SearchForm;
