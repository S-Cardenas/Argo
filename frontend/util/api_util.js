export const fetchSubmissions = (query, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/submissionanalytics',
    dataType: 'JSON',
    data: query,
    success,
    error
  });
};

export const fetchSearch = (query, success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/search',
    dataType: 'JSON',
    data: query,
    success,
    error
  });
};
