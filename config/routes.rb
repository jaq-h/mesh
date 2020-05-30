Rails.application.routes.draw do
  scope '/api' do
    get 'auth', to: "sessions#create"
    post 'login', to: "users#create"
    post 'playing', to: "users#show"
  end
  # namespace :api do
  #   get 'auth', to: "sessions#create"
  #   post 'login', to: "users#create"
  # end

  #active admin
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
