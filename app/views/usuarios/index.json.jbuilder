json.array!(@usuarios) do |usuario|
  json.extract! usuario, :id, :nombre, :apellido, :correo, :servicio, :descripcion
  json.url usuario_url(usuario, format: :json)
end
