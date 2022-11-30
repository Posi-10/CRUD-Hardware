// Importamos la funcion de Routes de express
const { Router } = require("express");
// Importamos las dunciones del los controladores de aciones a la base de datos
const { readHardware, createHardware, updateHardware, deleteHardware } = require('../controllers/hardwareControllers');
// Hacemos una variable para la funcion Routes
const router = Router();
// Hacemos las rutas de peticion
// Ruta principal
router.get("/", readHardware);
// Ruta para crear mas cards de hardware y DB
router.post("/create", createHardware);
// Ruta para actualizar cards de hardware y DB
router.post("/update", updateHardware);
// Ruta para eliminar cards de hardware y DB
router.get("/delete/:id", deleteHardware);
// Exportamos la rutas
module.exports = router;
