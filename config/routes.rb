Rails.application.routes.draw do
  scope '/api' do
    get 'auth', to: "sessions#create"
    post 'login', to: "users#create"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
