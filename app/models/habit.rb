class Habit < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :value, presence: true, numericality: true

  has_many :user_habits
  has_many :users, through: :user_habits
end
