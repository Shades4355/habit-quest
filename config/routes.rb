Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :habits, only: [:index, :show, :edit]
      resources :logs, only: [:index, :create, :destroy]
    end
  end
  resources :habits, only: [:new, :create, :destroy]

  get "/habits/:id/edit", to: "homes#index"

end
