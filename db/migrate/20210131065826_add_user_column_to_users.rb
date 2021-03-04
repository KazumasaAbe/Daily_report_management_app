class AddUserColumnToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :team_superior, :boolean, default: false
    add_column :users, :group_superior, :boolean, default: false
    add_column :users, :name_code, :integer
    add_column :users, :position, :string
    add_column :users, :department, :string
    add_column :users, :specialty, :string

  end
end
