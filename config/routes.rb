Kalbal::Application.routes.draw do

  get "api/ping" => "application#ping"

  resources :posts, path: 'api/posts'
  resources :user, path: 'api/user'

  resources :home
  resources :record		
	authenticated :user do
	    root :to => 'home#index'
	end
	  
   devise_for :users, path:'api/login'
   
	devise_scope :user do
	   post '/api/login/sign_in' => 'sessions#create', :as => 'login'
	   post '/api/logout' => 'sessions#destroy', :as => 'logout'
	   get '/api/current_user' => 'sessions#show_current_user', :as => 'show_current_user'
	end

end
