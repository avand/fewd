require 'test_helper'

# assert
# assert_equal a, b
# assert_nil

class UserTest < ActiveSupport::TestCase
  test "should be able to mass-assign to password" do
    assert User.new(password: "secret").password
  end

  test "should not be able to mass-assign to password_hash" do
    assert_raises ActiveModel::MassAssignmentSecurity::Error do
      User.new(password_hash: "inaccessible")
    end
  end

  test "setting the password sets the password_hash" do
    user = User.new
    user.password = "secret"
    assert user.password_hash, "password_hash was not true"
  end

  test "getting the password gets password from the password_hash" do
    password_hash = User::Password.create("secret")
    user = User.new
    user.password_hash = password_hash
    assert_equal user.password, "secret"
  end
end
