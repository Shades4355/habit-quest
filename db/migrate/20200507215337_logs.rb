class Logs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.bigint :habit_id
      t.timestamps null: false
    end
  end
end
