Kalbal::Application.routes.draw do

  get "api/ping" => "application#ping"

  resources :posts, path: 'api/posts'

end
