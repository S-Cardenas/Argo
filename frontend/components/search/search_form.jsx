import React from 'react';
import { hashHistory } from 'react-router';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: "",
      date: ""
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit() {
    return(e) => {
      e.preventDefault();
      this.setState({agent: "", date: ""}); //reset the form
      console.log(hashHistory);
      hashHistory.push({
        pathname: '/search',
        query: this.state,
        state: {}
      });
    };
  }

  render() {
    return(
      <form className="search-form" onSubmit={this.handleSubmit()}>
        <label>Agent
          <input
            className="input"
            ref="agent"
            value={this.state.agent}
            placeholder="John Doe"
            onChange={this.update('agent')}
            required/>
        </label>
        <label>Date
          <textarea
            className="input"
            ref="date"
            value={this.state.date}
            onChange={this.update('date')}
            required>
          </textarea>
        </label>
        <button className="create-button">Search!</button>
      </form>
    );
  }

}

export default SearchForm;
