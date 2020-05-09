class LogsSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :habit
end
