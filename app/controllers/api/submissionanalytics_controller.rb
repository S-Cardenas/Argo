class Api::SubmissionanalyticsController < ApplicationController
  def index
    @submissionanalytics = Submissionanalytics.first(5)
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
