require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  test "GET to new renders the new session form" do
    get :new
    assert_template :new
  end

  test "POST to create redirects to the root if the email and password match" do
    User.create(email: "foo@bar.com", password: "secret")
    post :create, :user => { :email => "foo@bar.com", :password => "secret" }
    assert_redirected_to root_path
  end

  test "POST to create sets the user ID in the session if the email and password match" do
    user = User.create(email: "foo@bar.com", password: "secret")
    post :create, :user => { :email => "foo@bar.com", :password => "secret" }
    assert_equal user.id, session[:user_id]
  end

  test "POST to create does not set the user ID in the session if the email and password do not match" do
    user = User.create(email: "foo@bar.com", password: "secret")
    post :create, :user => { :email => "foo@bar.com", :password => "doesnotmatch" }
    assert_nil session[:user_id]
  end

  test "POST to create renders new if the email and password do not match" do
    User.create(email: "foo@bar.com", password: "secret")
    post :create, :user => { :email => "foo@bar.com", :password => "doesnotmatch" }
    assert_template :new
  end
end
