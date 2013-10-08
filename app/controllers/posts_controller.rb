class PostsController < ApplicationController
 
  def index
    render json: Post.all
  end

  def create
  	STDERR.puts "Params are: #{params.inspect}"
    @kalbal = Post.new(:message => params["message"])

    if @kalbal.save
      render json: @kalbal, status: :ok
    else
      render json: @kalbal.errors, status: :unprocessable_entity
    end
  end

end
