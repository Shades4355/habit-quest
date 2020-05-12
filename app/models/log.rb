class Log < ApplicationRecord
  belongs_to :habit

  validates :habit_id, numericality: true

  def self.all_for_user(c_user)
    logs = []
    c_user.habits.each do |habit|
      habit.logs.each do |log|
        logs << log
      end
    end
    return logs
  end
end
