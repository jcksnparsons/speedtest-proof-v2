class SpeedtestController < ApplicationController
  def index; end

  def perform
    test = Speedtest::Test.new(upload_runs: 1)
    results = test.run
    render json: { value: results.upload_rate / 1024 / 1024 }
  end
end
