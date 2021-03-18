# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_14_204628) do

  create_table "attendances", force: :cascade do |t|
    t.date "worked_on"
    t.string "A_reception_remainder_time"
    t.string "A_reception_Performance_time"
    t.string "clean_time"
    t.string "meeting_time"
    t.string "other_time"
    t.string "over_time"
    t.string "classification"
    t.string "working_time"
    t.string "designation_time"
    t.string "address"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "daily_receipts", force: :cascade do |t|
    t.integer "d_receipt_namuber"
    t.string "d_receipt_name"
    t.integer "d_receipt_time"
    t.string "d_receipt_specialty"
    t.integer "attendance_id"
    t.integer "receipt_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attendance_id"], name: "index_daily_receipts_on_attendance_id"
    t.index ["receipt_id"], name: "index_daily_receipts_on_receipt_id"
  end

  create_table "receipts", force: :cascade do |t|
    t.integer "receipt_namuber"
    t.string "receipt_name"
    t.integer "receipt_time"
    t.string "receipt_specialty"
    t.integer "attendance_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attendance_id"], name: "index_receipts_on_attendance_id"
  end

  create_table "receptions", force: :cascade do |t|
    t.integer "reception_namuber"
    t.string "reception_name"
    t.integer "reception_time"
    t.integer "reception_remainder_time"
    t.integer "reception_Performance_time"
    t.string "reception_specialty"
    t.string "check"
    t.string "check_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest"
    t.string "remember_digest"
    t.boolean "admin", default: false
    t.boolean "team_superior", default: false
    t.boolean "group_superior", default: false
    t.integer "name_code"
    t.string "position"
    t.string "department"
    t.string "specialty"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "attendances", "users"
  add_foreign_key "daily_receipts", "attendances"
  add_foreign_key "daily_receipts", "receipts"
  add_foreign_key "receipts", "attendances"
end
