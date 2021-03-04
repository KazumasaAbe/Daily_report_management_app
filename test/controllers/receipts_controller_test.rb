require "test_helper"

class ReceiptsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get receipts_new_url
    assert_response :success
  end
end
