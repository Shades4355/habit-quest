
user1 = User.create(email: "123@456.com", password: '123456')

habit1 = Habit.create(name: "dishes", value: 5, user: user1)
habit2 = Habit.create(name: "homework", value: 3, user: user1)
Habit.create(name: "clean litter box", value: 1, user: user1)

Log.create(habit_id: habit1.id)
Log.create(habit: habit2)
