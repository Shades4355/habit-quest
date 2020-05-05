class Api::V1::HabitsController < ApplicationController
  def index
    render json: Habit.all
  end
end
