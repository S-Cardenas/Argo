class Api::SubmissionanalyticsController < ApplicationController

  def index

    sort_by = params['sort'] ? params['sort'].to_sym : :RECEIVED_DATE
    @submissionanalytics = Submissionanalytics.order(sort_by).offset(5 * params['page'].to_i).limit(5)
    render :index
  end

  def show
    @submissionanalytics = Submissionanalytics.find(params[:id])
    render :show
  end

  private

  def submissionanalytics_params

  end

end
