class Api::V1::HabitsController < ApplicationController
  def index
    habits = Habit.all.sort_by(&:name)
    render json: habits
  end
end
