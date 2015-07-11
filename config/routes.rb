Rails.application.routes.draw do
  resources :shops

  get 'showmap', to: 'shops#show'

  root to: 'shops#index'
end
