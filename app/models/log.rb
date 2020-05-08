class Log < ApplicationRecord
  belongs_to :habit

  def self.all_for_user(c_user)
    logs = []
    c_user.habits.each do |habit|
      habit.logs.each do |log|
        logs << log
      end
    end
    return logs
  end


  def today
    self.where("created_at > ?", Time.now())
  end

  def self.this_month
    self.where("created_at <= ?", today).all && self.where("created_at >= ?", Date.new().beginning_of_month).all
  end

  def self.last_month
    self.where('created_at > ?', Date.new().beginning_of_month).all && self.where('created_at < ?',1.month.ago.beginning_of_month).all
  end

  def self.two_months_ago
    self.where('created_at > ?', 1.month.ago.beginning_of_month).all && self.where('created_at < ?',2.month.ago.beginning_of_month).all
  end

  def self.three_months_ago
    self.where('created_at > ?', 2.month.ago.beginning_of_month).all && self.where('created_at < ?',3.month.ago.beginning_of_month).all
  end
end
