class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :current_user

  has_many :logs
  def current_user
    scope
  end
end
