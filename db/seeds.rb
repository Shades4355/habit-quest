
user1 = User.create(email: "123@456.com", password: '123456')

habit1 = Habit.create(name: "dishes", value: 5)

UserHabit.create(user_id: user1.id, habit_id: habit1.id)
