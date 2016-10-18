Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :submissionanalytics, only: [:index, :create, :show, :update]
  end
end
