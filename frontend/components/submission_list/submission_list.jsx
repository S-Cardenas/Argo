import React from 'react';

class SubmissionList extends React.Component {
  componentDidMount() {
    this.props.requestSubmissions();
  }

  render() {
    const { submissions } = this.props;
    var list  = submissions.map(submission => <li key={submission.ID}>{submission.AGENT_NAME}</li>);

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default SubmissionList;
