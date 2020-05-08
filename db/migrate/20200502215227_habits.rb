class Habits < ActiveRecord::Migration[5.2]
  def change
    create_table :habits do |t|
      t.string :name, null: false
      t.integer :value, null: false
      t.bigint :user_id, null: false

      t.timestamps null: false
    end
  end
end
