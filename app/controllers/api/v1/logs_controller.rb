class Api::V1::LogsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    all_for_user = Log.all_for_user(current_user)

    today = Log.today(all_for_user)
    this_month = Log.this_month(all_for_user)
    last_month = Log.last_month(all_for_user)
    two_months_ago = Log.two_months_ago(all_for_user)
    three_months_ago = Log.three_months_ago(all_for_user)

    render json: {
      today: serialized_data(today, LogsSerializer),
      this_month: serialized_data(this_month, LogsSerializer),
      last_month: serialized_data(last_month, LogsSerializer),
      two_months_ago: serialized_data(two_months_ago, LogsSerializer),
      three_months_ago: serialized_data(three_months_ago, LogsSerializer)
    }
  end

  def create
    new_log = Log.new()
    new_log.habit_id = params["_json"]
    new_log.value = new_log.habit.value
    new_log.user_id = current_user.id
    if new_log.save
      render json: new_log
    else
      flash.now[:error] = habit.errors.full_messages.to_sentence
    end
  end

  private

  def serialized_data(data, serializer)
    ActiveModelSerializers::SerializableResource.new(data, each_serializer: serializer, scope: current_user)
  end

  def log_params


  end
end
