class Reception < ApplicationRecord
  validates :reception_namuber, presence: true, length: { maximum: 5 }
  validates :reception_name, presence: true
  validates :reception_time, presence: true
  validates :reception_specialty, presence: true
end
