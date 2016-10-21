export const allSubmissions = (state) => {
  return state ? Object.keys(state.submissions).map(key => state.submissions[key]) : [];
};

export const currentSubmission = (state) => {
  return state ? state.currentSubmission : {};
};
