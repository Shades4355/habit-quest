require 'rails_helper'

RSpec.describe Log, type: :model do
  user1 = User.create(email: "123@456.com", password: '123456')

  it { should have_valid(:habit_id).when(user1.id)}

  it { should_not have_valid(:habit_id).when("", "three") }
end
