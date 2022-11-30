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
// Con el comando *.set* asigna la configuración del valor del nombre. Puede almacenar cualquier valor que desee, pero se pueden usar ciertos nombres para configurar el comportamiento del servidor
// Habilitamos la ejecucion del motor de plantillas desde el archivo index.pug ubicado en la carpeta view
app.set('view engine', 'pug');
// Con el comando *.get* enruta las solicitudes HTTP GET a la ruta especificada con las funciones de devolución de llamada especificadas.
// Dando la direccion principal para visuañizar el index de nuestro motor de plantilla
/*app.get("/", (_, res) => {
  // Con el comando *.render* devuelve el HTML renderizado de una vista a través de una funcion de callback
  res.render('index', {ok: true, message: 'Hola Mundo'});
});*/
// Con el comando *.use* le decimoa que de una una ubicacion use esa direccion, y con una funcion del callback es lo que no direcciona de la ura llamada, si no ponemos una ruta por default pone la ruta raiz
// Con el comando *.urlencoded* esta es una función de middleware integrada en Express. Analiza las solicitudes entrantes con cargas útiles codificadas en rl url y se basa en body-parser .
app.use(express.urlencoded({extended: true}));
// Con el comando *.json* esta es una función de middleware integrada en Express. Analiza las solicitudes entrantes con cargas JSON y se basa en body-parser.
app.use(express.json());
// Con el comando *.static* esta es una función de middleware integrada en Express. Sirve archivos estáticos y se basa en serve-static 
app.use('/static', express.static('./public'));
// usamos la funcion de callback para las rutas.
app.use(require('./routes/hardwareRoutes'));
// Eschucar el servidor y asignar un puerto
app.listen( process.env.PORT, () => {
  console.log(`App escuchando en http://localhost:${ process.env.PORT }`) 
});