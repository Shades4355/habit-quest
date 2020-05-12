class Api::V1::HabitsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def index
    habits = current_user.habits.sort_by(&:name)


    render json: habits
  end

  def show
    render json: Habit.find(params[:id])
  end

  def edit
    render json: Habit.find(params[:id])
  end

  def update
    updated_habit = Habit.find(params[:id])
    if updated_habit.update(habit_params)
      render json: updated_habit
    else
      render json: { errors: updated_habit.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def habit_params
    params.require(:habit).permit(:name, :value)
  end
end
