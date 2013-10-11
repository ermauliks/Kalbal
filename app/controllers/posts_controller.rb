class PostsController < ApplicationController
 
  def index
    render json: Post.all
  end

  def create
    kalbal = Post.create(:message => params[:message], :user => "maulik")

    if kalbal
      render json: kalbal, status: :ok
    else
      render json:  kalbal.errors, status: :unprocessable_entity
    end
  end

end
