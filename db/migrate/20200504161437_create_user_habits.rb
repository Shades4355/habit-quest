class CreateUserHabits < ActiveRecord::Migration[5.2]
  def change
    create_table :user_habits do |t|
      t.integer :user_id, null: false
      t.integer :habit_id, null: false

      t.timestamps
    end
  end

end
