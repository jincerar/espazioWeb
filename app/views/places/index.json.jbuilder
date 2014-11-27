json.array!(@places) do |place|
  json.extract! place, :id, :nombre, :ubicacion, :espacio, :amenities, :precio, :horario, :usuario_id
  json.url place_url(place, format: :json)
end
