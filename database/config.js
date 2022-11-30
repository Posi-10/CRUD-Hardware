// Importacion de la paqueteria de mongoose
const mongoose = require("mongoose");
// Funcion de conexión a la base de datos como una funcion asíncrona
const dbConnnect = async() => {
  // Declaramos la try catch pra ver si al momento de provar la funcion hay un problema 
  try {
    // metodo de conexión, le tenemos que poner la direccion de la base de datos, con una espera
    await mongoose.connect( process.env.URI_DB );
    // mandaamos un mensaje si la conexión fue exitoza
    console.info('La Base de Datos se conecto correctamente');
  } catch (error) {
    // mandamos un mensaje si encontro un error al momento de encontrar
    console.error(error);
    // De clatamos el error con un throw
    throw Error('Error al connectar a la Base de datos');
  }
};
// Exportamos el modulo creado
module.exports = dbConnnect;