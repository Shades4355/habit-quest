class Habit < ApplicationRecord
  validates :name, presence: true
  validates :value, presence: true, numericality: true

  belongs_to :user
  has_many :logs
end
