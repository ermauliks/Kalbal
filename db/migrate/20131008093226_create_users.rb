class CreateUsers < ActiveRecord::Migration
  def change
 	create_table(:users, :primary_key => 'handle') do |t|
	  t.string :email
      t.string :name
      t.string :password

      t.timestamps
    end
  end
end
