

const allSubmissions = (state) => {
  return state ? Object.keys(state.submissions).map(key => state.submissions[key]) : [];
};

export default allSubmissions;
