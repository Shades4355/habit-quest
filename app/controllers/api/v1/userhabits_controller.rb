class Api::V1::UserhabitsController < ApplicationController

  def index
    all_for_user = UserHabit.where("user_id = ?", current_user.id).all
    # today = all_for_user
    today = all_for_user.where("created_at < ?", Time.now())
    #
    this_month = all_for_user.where("created_at < ?", Date.new()).all && all_for_user.where("created_at >= ?", Date.new().beginning_of_month).all
    #
    last_month = all_for_user.where('created_at > ?', Date.new().beginning_of_month).all && all_for_user.where('created_at < ?',1.month.ago.beginning_of_month).all
    #
    render json: [today, this_month, last_month]
  end
end
