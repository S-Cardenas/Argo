export const fetchSubmissions = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/submissionanalytics',
    success,
    error
  });
};
