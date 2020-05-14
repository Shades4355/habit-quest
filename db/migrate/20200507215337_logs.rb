class Logs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.bigint :habit_id, null: true
      t.bigint :user_id, null: false
      t.integer :value

      t.timestamps null: false
    end
  end
end
