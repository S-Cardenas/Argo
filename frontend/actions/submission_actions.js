export const REQUEST_SUBMISSIONS = 'REQUEST_SUBMISSIONS';
export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';
export const REQUEST_SUBMISSION = 'REQUEST_SUBMISSION';
export const RECEIVE_SUBMISSION = 'RECEIVE_SUBMISSION';
export const RESET_STATE = 'RESET_STATE';
export const RESET_STATE2 = 'RESET_STATE2';

export const requestSubmissions = (query) => ({
  type: REQUEST_SUBMISSIONS,
  query
});

export const requestSubmission = (data) => ({
  type: REQUEST_SUBMISSION,
  data
});

export const receiveSubmissions = (submissions) => ({
  type: RECEIVE_SUBMISSIONS,
  submissions
});

export const receiveSubmission = (submission) => ({
  type: RECEIVE_SUBMISSION,
  submission
});

export const resetState = () => ({
  type: RESET_STATE,
});

export const receiveResetState = () => ({
  type: RESET_STATE2,
});
