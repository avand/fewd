json.array!(@outfits) do |outfit|
  json.extract! outfit, :name, :description, :color, :size
  json.url outfit_url(outfit, format: :json)
end
