class Log < ApplicationRecord
  belongs_to :habit, optional: true
  belongs_to :user

  validates :habit_id, numericality: true, allow_nil: true
  validates :user_id, numericality: true
  validates :value, numericality: true, allow_blank: true

  def self.all_for_user(c_user)
    logs = []
    c_user.logs.each do |log|
      logs << log
    end
    return logs
  end

  def self.today(array)
    array.filter{ |log| log.created_at < Time.now && log.created_at > Time.now.beginning_of_day}
  end

  def self.this_month(array)
    array.filter{ |log| log.created_at > Time.now.beginning_of_month}
  end

  def self.last_month(array)
    array.filter{ |log| log.created_at < Time.now.beginning_of_month && log.created_at > 1.month.ago.beginning_of_month}
  end

  def self.two_months_ago(array)
    array.filter{ |log| log.created_at < 1.month.ago.beginning_of_month && log.created_at > 2.month.ago.beginning_of_month}
  end

  def self.three_months_ago(array)
    array.filter{ |log| log.created_at < 2.month.ago.beginning_of_month && log.created_at > 3.month.ago.beginning_of_month}
  end
end
