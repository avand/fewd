require 'test_helper'

class OutfitsControllerTest < ActionController::TestCase
  setup do
    @outfit = outfits(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:outfits)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create outfit" do
    assert_difference('Outfit.count') do
      post :create, outfit: { color: @outfit.color, description: @outfit.description, name: @outfit.name, size: @outfit.size }
    end

    assert_redirected_to outfit_path(assigns(:outfit))
  end

  test "should show outfit" do
    get :show, id: @outfit
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @outfit
    assert_response :success
  end

  test "should update outfit" do
    patch :update, id: @outfit, outfit: { color: @outfit.color, description: @outfit.description, name: @outfit.name, size: @outfit.size }
    assert_redirected_to outfit_path(assigns(:outfit))
  end

  test "should destroy outfit" do
    assert_difference('Outfit.count', -1) do
      delete :destroy, id: @outfit
    end

    assert_redirected_to outfits_path
  end
end
