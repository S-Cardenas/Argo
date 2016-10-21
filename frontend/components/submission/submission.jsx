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
    return(
      <div>{submission.AGENT_NAME}</div>
    );
  }
}

export default Submission;
