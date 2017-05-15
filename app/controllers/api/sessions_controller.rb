class Api::SessionsController < ApplicationController
  def create
    p params
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in(@user)
      render json: { username: @user.username, id: @user.id }
    else
      render json: "invalid credentials", status: 401
    end
  end

  def destroy
    if current_user
      log_out current_user
      render json: {}
    else
      render json: "you are not logged in!", status: 404
    end

  end




end
