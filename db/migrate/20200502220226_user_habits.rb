class UserHabits < ActiveRecord::Migration[5.2]
  def change
    create_table UserHabits do |t|
      t.integer :user_id, null: false
      t.integer :habit_id, null: false
    end


  end
end
