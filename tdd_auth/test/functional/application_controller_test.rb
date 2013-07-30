require 'test_helper'

class ApplicationControllerTest < ActionController::TestCase
  test "current_user returns the user whose ID is in session" do
    user = User.create
    session[:user_id] = user.id
    assert_equal user, @controller.current_user
  end

  test "current_user returns nil if there is no ID in session" do
    session[:user_id] = nil
    assert_nil @controller.current_user
  end

  test "current_user should not hit the database multiple times" do
    session[:user_id] = 1
    User.expects(:find).with(1).returns(User.new).once
    3.times { @controller.current_user }
  end
end
