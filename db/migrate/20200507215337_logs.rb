class Logs < ActiveRecord::Migration[5.2]
  def change
    create_table do |t|
      t.integer :value, null: false
      t.timestamps null: false
  end
end
