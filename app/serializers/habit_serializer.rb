class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :current_user

  def current_user
    scope
  end
end
