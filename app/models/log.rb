class Log < ApplicationRecord
  belongs_to :habit

  def self.all_for_user(banana)
    self.where("user_id = ?", banana.id).all
  end

  def self.today
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
