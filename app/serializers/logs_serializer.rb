class LogsSerializer < ActiveModel::Serializer
  attributes :id, :value

  belongs_to :habit
end
