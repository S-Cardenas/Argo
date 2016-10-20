export const REQUEST_SUBMISSIONS = 'REQUEST_SUBMISSIONS';
export const RECEIVE_SUBMISSIONS = 'RECEIVE_SUBMISSIONS';

export const requestSubmissions = () => ({
  type: REQUEST_SUBMISSIONS
});

export const receiveSubmissions = (submissions) => ({
  type: RECEIVE_SUBMISSIONS,
  submissions
});
