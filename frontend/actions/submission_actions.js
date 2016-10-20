export const REQUEST_SUBMISSIONS = 'REQUEST_SUBMISSIONS';
export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';

export const requestSubmissions = (query) => ({
  type: REQUEST_SUBMISSIONS,
  query
});

export const receiveSubmissions = (submissions) => ({
  type: RECEIVE_SUBMISSIONS,
  submissions
});
