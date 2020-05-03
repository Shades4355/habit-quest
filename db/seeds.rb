<<<<<<< HEAD

user1 = User.create(email: "123@456.com", password: '123456')

habit1 = Habit.create(name: "dishes", value: 5)


=======
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: "123@456.com")

habit1 = Habit.create(name: "dishes", value: 5)

>>>>>>> 581317c78c22d54c62ae64cccdb7cd020a7c858a
# user_habit1 = UserHabit.create(user_id: user1.id, habit_id: habit1.id)
#  "uninitialized constant UserHabit"
