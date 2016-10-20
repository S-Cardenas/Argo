
json.array! @submissionanalytics do |submissionanalytics|
  json.(submissionanalytics, *submissionanalytics.attributes.keys)
end
