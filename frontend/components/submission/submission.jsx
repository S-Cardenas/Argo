import React from 'react';

class Submission extends React.Component {

  componentDidMount() {
    this.props.requestSubmission(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.resetState();
  }

  render() {
    const { submission } = this.props;
    let keys = Object.keys(submission).map( key => {
      return (
        <li key={key} className='submission-detail-item'>
          <div className="submission-heading">{key}:</div>
          {submission[key]}
        </li>
      );
    });

    return(
      <div className="app">
        <h1 className="main-header">Argo Digital</h1>
        <div className="submission-detail group">
          <container className="detail-header">Submission Details</container>
          <ul className="detail-list group">
            {keys}
          </ul>
        </div>
      </div>

    );
  }
}

export default Submission;
