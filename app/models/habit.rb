class Habit < ApplicationRecord
  validate :name, presense: true, uniqueness: true
  validate :value, presense: true, numericallity: true

  has_many :user_habits
  has_many :users, through: :user_habits
end
