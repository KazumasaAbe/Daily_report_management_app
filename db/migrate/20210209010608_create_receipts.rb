class CreateReceipts < ActiveRecord::Migration[6.1]
  def change
    create_table :receipts do |t|
      t.integer "receipt_namuber"       #受付ナンバー
      t.string "receipt_name"           #受付名
      t.integer "receipt_time"           #使用時間
      t.string "receipt_specialty"      #受付種別

      t.references :attendance, foreign_key: true

      t.timestamps
    end
  end
end
