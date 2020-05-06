class Api::V1::UserhabitsController < ApplicationController

  def index
    today = UserHabit.where("created_at = :today", today: Date.new())

    this_month = UserHabit.where("created_at < ?", Date.new()).all && UserHabit.where("created_at >= ?", Date.new().beginning_of_month).all

    last_month = UserHabit.where('created_at < ?', Date.new().beginning_of_month).all && UserHabit.where('created_at > ?',1.month.ago.beginning_of_month).all

    render json: [today, this_month, last_month]
  end
end
