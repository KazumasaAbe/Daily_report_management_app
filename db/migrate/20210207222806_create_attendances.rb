class CreateAttendances < ActiveRecord::Migration[6.1]
  def change
    create_table :attendances do |t|
      t.date :worked_on                         #日付
      t.string "A_reception_remainder_time"     #残時間
      t.string "A_reception_Performance_time"   #実績時間

      t.string "clean_time"                     #4S時間
      t.string "meeting_time"                 #朝礼・昼礼時間
      t.string "other_time"                     #その他時間
      t.string "over_time"                      #残業時間
      t.string "classification"                 #勤怠種別
      t.string "working_time"                 #勤務時間
      t.string "designation_time"             #指定勤務時間
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end