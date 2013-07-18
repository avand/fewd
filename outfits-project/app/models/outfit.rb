class Outfit < ActiveRecord::Base
  validates :name, presence: true
end
