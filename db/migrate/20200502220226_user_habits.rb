class UserHabits < ActiveRecord::Migration[5.2]
  def change
    create_table UserHabits do |t|
      t.integer :user, null: false
      t.integer :habit, null: false
    end


  end
end
