class Receipt < ApplicationRecord
  belongs_to :attendance
  
  #validates :receipt_namuber, presence: true, length: { maximum: 5 }
  #alidates :receipt_name, presence: true
  #validates :receipt_time, presence: true
  #validates :receipt_specialty, presence: true
end
