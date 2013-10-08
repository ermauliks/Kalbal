Kalbal::Application.routes.draw do

  get "api/ping" => "application#ping"

  resources :posts, path: 'api/posts'
  resources :user, path: 'api/user'

end
