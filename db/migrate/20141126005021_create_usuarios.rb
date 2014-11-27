class CreateUsuarios < ActiveRecord::Migration
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :apellido
      t.string :correo
      t.string :servicio
      t.string :descripcion

      t.timestamps
    end
  end
end
