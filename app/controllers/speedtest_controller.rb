class SpeedtestController < ApplicationController
  def index; end

  def perform
    render json: { value: 'you performed a speed test' }
  end
end
