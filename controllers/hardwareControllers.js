// Importamos el modelo y esquema de nuesta Base de datos
const Hardware = require("../models/Hardware");
// Creamos la funcion de leer si tenemos algo en la Base de Datos y ponerlo en la pagina
const readHardware = async(_, res) => {
  try {
    // buscamos si tenemos algo en la coleccion de hardware
    const hardware = await Hardware.find({});
    if ( hardware.length === 0 ) {
      return res.render('index', {
        ok: false
      });
    } 
    return res.render('index', {
      ok: true,
      hardware
    });
  } catch (error) {
    return res.json({
      ok: false,
      massege: "Error en el servidor, comunicate con el administrador"
    });
  }
};
// Creamos la funcion de subir datos en la base de datos
const createHardware = async(req, res) => {
  try {
    // Creamos el documento de los datos a subir
    const newHardware = new Hardware(req.body);
    // Guardamos nuestro documento en la coleccion
    await newHardware.save();
    // redireccionamos a la raiz del documento a la vez que se refrsca y se visualisa lo subido
    return res.redirect('/');
  } catch (error) {
    return res.json({
      ok: false,
      massege: "Error en el servidor, comunicate con el administrador"
    });
  }
};
// Creamos la funcion de actualizar datos en la base de datos
const updateHardware = async(req, res) => {
  // Hacemos nuestra variable para identificar nuestra ID
  const id = req.body.updateId;
  try {
    // Buscamos el id y con ese mismo se acutalizan todos los componentes del documento
    await Hardware.findByIdAndUpdate(id, req.body);
    return res.redirect('/');
  } catch (error) {
    return res.json({
      ok: false,
      massege: "Error en el servidor, comunicate con el administrador"
    });
  }
}
// Creamos la funcion de eliminar el documento de la base de datos
const deleteHardware = async(req, res) => {
  const id = req.params.id;
  try {
    await Hardware.findByIdAndDelete(id);
    return res.redirect('/');
  } catch (error) {
    return res.json({
      ok: false,
      massege: "Error en el servidor, comunicate con el administrador"
    });
  }
};

module.exports = {
  readHardware,
  createHardware,
  updateHardware,
  deleteHardware
};