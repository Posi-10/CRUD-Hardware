// Importamos el Schema y model del paquete mongoose
const { Schema, model } = require('mongoose');
// Creacion del esquema
const hardwareSchema = Schema({
  // ponemos el nombre del coponente en tipo formato JSON con el nombre
  hardware: {
    // Identificamos el tipo de valor
    type: String,
    // Indicamos si el componente es requerido
    require: true
  },
  name: {
    type: String,
    require: true
  },
  model: {
    type: String,
    require: true,
    // Indicamos si el componente es unico 
    unique: true,
  },
  brand: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  release_year: {
    type: Date,
    require: true,
  },
  image_link: {
    type: String,
    require: true
  }
});

// Creamos el modelo vazado en el esquema
module.exports = model( "Hardware", hardwareSchema );