class Log < ApplicationRecord
  belongs_to :habit, optional: true
  belongs_to :user

  validates :habit_id, numericality: true, allow_nil: true
  validates :user_id, numericality: true
  validates :value, numericality: true

  def self.all_for_user(c_user)
    logs = []
    c_user.logs.each do |log|
      logs << log
    end
    return logs
  end
end
