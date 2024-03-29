class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :comment
      t.binary :image, :limit => 999999999

      t.timestamps
    end
  end
end
