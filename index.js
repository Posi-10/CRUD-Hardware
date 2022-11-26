/** IMPORTACIONES **/
// Importación y configuramos el dontov
require('dotenv').config();
// Importacion de express
const express = require('express');
// Importamos la funcion creada en la carpeta database
const dbConnnect = require('./database/config');

/** VARIABLES **/
// Declaramos la funcion de express
const app = express();
// funcion de conexion
dbConnnect();

/** Funciones **/

// Eschucar el servidor y asignar un puerto
app.listen( process.env.PORT, () => console.log(`App escuchando en http://localhost:${ process.env.PORT }`) );