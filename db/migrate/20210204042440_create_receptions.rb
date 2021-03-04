class CreateReceptions < ActiveRecord::Migration[6.1]
  def change
    create_table :receptions do |t|
      t.integer :reception_namuber          #受付No
      t.string :reception_name              #受付名
      t.integer :reception_time              #規定工数
      t.integer :reception_remainder_time    #残り工数
      t.integer :reception_Performance_time  #実績工数
      t.string :reception_specialty         #受付種類
      t.string :check                       #日報選択
      t.string :check_id                    #選択ID

      t.timestamps
    end
  end
end
