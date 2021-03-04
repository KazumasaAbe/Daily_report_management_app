require "test_helper"

class ReceptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get processing" do
    get receptions_processing_url
    assert_response :success
  end
end
