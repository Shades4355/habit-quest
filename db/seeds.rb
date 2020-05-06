
user1 = User.create(email: "123@456.com", password: '123456')

habit1 = Habit.create(name: "dishes", value: 5)
habit2 = Habit.create(name: "homework", value: 3)
Habit.create(name: "clean litter box", value: 1)

UserHabit.create(user_id: user1.id, habit_id: habit1.id)
UserHabit.create(user: user1, habit: habit2)
