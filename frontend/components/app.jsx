import React from 'react';
import { withRouter, Link } from 'react-router';

class App extends React.Component {

  constructor() {
    super();
    this.migrate = this.migrate.bind(this);
  }

  migrate() {
    this.props.router.push('/submissions');
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

export default withRouter(App);
