import { applyMiddleware } from 'redux';

import SubmissionMiddleware from './submissions_middleware';

const masterMiddleware = applyMiddleware(
  SubmissionMiddleware
);

export default masterMiddleware;
