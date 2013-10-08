class UserController < ApplicationController

  def index
  	    render json: User.all
  end

  def create

    @user = User.new(:email => params["email"], :handle => params["handle"], :password => params["password"], :name=> params["name"])

    if @user.save
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
end
