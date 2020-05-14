require 'rails_helper'

RSpec.describe Log, type: :model do
  user1 = User.create(email: "123@456.com", password: '123456')
  habit1 = Habit.create(name: "dishes", value: 5, user: user1)

  it { should have_valid(:habit).when(habit1, nil)}

  it { should_not have_valid(:habit_id).when("three") }

  it { should have_valid(:user_id).when(user1.id)}

  it { should_not have_valid(:user_id).when("", "three") }
end
