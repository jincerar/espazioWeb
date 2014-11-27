class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :nombre
      t.string :ubicacion
      t.integer :espacio
      t.string :amenities
      t.integer :precio
      t.string :horario
      t.integer :usuario_id

      t.timestamps
    end
  end
end
