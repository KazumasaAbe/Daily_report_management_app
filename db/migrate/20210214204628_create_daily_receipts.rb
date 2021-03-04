class CreateDailyReceipts < ActiveRecord::Migration[6.1]
  def change
    create_table :daily_receipts do |t|
      t.integer "d_receipt_namuber"       #受付ナンバー
      t.string "d_receipt_name"           #受付名
      t.integer "d_receipt_time"           #使用時間
      t.string "d_receipt_specialty"      #受付種別

      t.references :attendance, foreign_key: true
      t.references :receipt, foreign_key: true
      t.timestamps
    end
  end
end
