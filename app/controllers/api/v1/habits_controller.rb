class Api::V1::HabitsController < ApplicationController
  def index
    habits = Habit.all.sort_by(&:name)

    render json: habits
  end

  def show
    render json: Habit.find(params[:id])
  end

  def edit
    render json: Habit.find(params[:id])
  end

end
