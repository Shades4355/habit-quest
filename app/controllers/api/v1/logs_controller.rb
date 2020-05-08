class Api::V1::LogsController < ApplicationController

  def index
    all_for_user = Log.all_for_user(current_user)

    today = all_for_user.today

    this_month = all_for_user.this_month

    last_month = all_for_user.last_month

binding.pry

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
