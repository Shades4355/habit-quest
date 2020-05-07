class UserhabitsSerializer < ActiveModel::Serializer
  attributes :user_id, :habit_id

  belongs_to :habit
end
