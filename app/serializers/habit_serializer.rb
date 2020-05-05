class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_user

  def current_user
    scope
  end
end
