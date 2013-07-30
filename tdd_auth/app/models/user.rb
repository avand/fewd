require "bcrypt"

class User < ActiveRecord::Base
  attr_accessible :email, :name, :password

  include BCrypt

  def password
    Password.new(password_hash)
  end

  def password=(new_password)
    self.password_hash = Password.create(new_password)
  end
end
