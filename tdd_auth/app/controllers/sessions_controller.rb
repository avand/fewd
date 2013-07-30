class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:user][:email])

    if user.password == params[:user][:password]
      session[:user_id] = user.id
      redirect_to root_path
    else
      render :new
    end
  end
end
