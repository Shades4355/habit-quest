class Api::V1::LogsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    all_for_user = Log.all_for_user(current_user)

    today = all_for_user.filter{ |log| log.created_at < Time.now && log.created_at > Time.now.beginning_of_day}

    this_month = all_for_user.filter{ |log| log.created_at > Time.now.beginning_of_month}

    last_month = all_for_user.filter{ |log| log.created_at < Time.now.beginning_of_month && log.created_at > 1.month.ago.beginning_of_month}

    two_months_ago = all_for_user.filter{ |log| log.created_at < 1.month.ago.beginning_of_month && log.created_at > 2.month.ago.beginning_of_month}

    three_months_ago = all_for_user.filter{ |log| log.created_at < 2.month.ago.beginning_of_month && log.created_at > 3.month.ago.beginning_of_month}


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
