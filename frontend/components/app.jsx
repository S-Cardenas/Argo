import React from 'react';
import { hashHistory } from 'react-router';
import SearchForm from './search/search_form';

class App extends React.Component {

  constructor() {
    super();
    this.migrate = this.migrate.bind(this);
  }

  migrate(e) {
    e.preventDefault();
    var query = {
      page: 0,
      order: 'RECEIVED_DATE'
    };

    hashHistory.push({
      pathname: '/submissions',
      query: query,
      state: {}
    });
  }

  render() {
    return(
      <div className="app">
        <h1 className="main-header">Argo Digital</h1>
        <div onClick={this.migrate}>View All Subissions</div>
        <SearchForm />
      </div>
    );
  }
}

export default App;