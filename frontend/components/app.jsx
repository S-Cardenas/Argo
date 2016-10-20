import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';

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
        <Link to="/submissions">Other link</Link>
      </div>
    );
  }
}

export default App;
