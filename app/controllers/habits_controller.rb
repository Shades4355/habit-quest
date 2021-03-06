class HabitsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def new
    @habit = Habit.new()
  end

  def create
    habit = Habit.new(habit_params)
    habit.user = current_user

    if habit.save
      redirect_to '/'
    else
      flash[:error] = habit.errors.full_messages.to_sentence
      redirect_to '/habits/new'
    end
  end

  def destroy
    deleted_habit = Habit.find(params[:id]).delete
    render json: deleted_habit
  end

  private

  def habit_params
    params.require(:habit).permit(:name, :value)
  end
end
