class Attendance < ApplicationRecord
  belongs_to :user
  has_many :receipts, dependent: :destroy
  has_many :daily_receipts, dependent: :destroy
  
  validates :worked_on, presence: true
  
end
