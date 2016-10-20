Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :submissionanalytics, only: [:index, :create, :show, :update]
  end
end
