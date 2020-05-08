class LogsSerializer < ActiveModel::Serializer
  resources :id
  
  belongs_to :habit
end
