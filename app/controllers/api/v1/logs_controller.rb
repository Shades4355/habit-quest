class Api::V1::LogsController < ApplicationController

  def index
    all_for_user = Log.where("user_id = ?", current_user.id).all

    today = all_for_user.where("created_at > ?", Time.now())

    this_month = all_for_user.where("created_at <= ?", today).all && all_for_user.where("created_at >= ?", Date.new().beginning_of_month).all

    last_month = all_for_user.where('created_at > ?', Date.new().beginning_of_month).all && all_for_user.where('created_at < ?',1.month.ago.beginning_of_month).all

    render json: {
      today: serialized_data(today, LogsSerializer),
      this_month: serialized_data(this_month, LogsSerializer),
      last_month: serialized_data(last_month, LogsSerializer),
      }
  end

  def create
    taskPerformed = Log.new(uh_params)
    taskPerformed.user_id = current_user.id
  end

  private

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
  end
end
