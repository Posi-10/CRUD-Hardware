# CRUD Hardware 

## Indice

- [CRUD Hardware](#crud-hardware)
  - [Indice](#indice)
  - [Inicio de clonación de proyecto](#inicio-de-clonación-de-proyecto)
  - [Configuración yarn](#configuración-yarn)
  - [Inicio de proyecto con yarn](#inicio-de-proyecto-con-yarn)
    - [Instalación de paquetes](#instalación-de-paquetes)
  - [Creación de variables de entorno](#creación-de-variables-de-entorno)
  - [Creacion de proyecto](#creacion-de-proyecto)

## Inicio de clonación de proyecto
Para la ejecucion de este proyecto se tiene que ejecutar:

```sh
yarn install
yarn dev
```

Pero antes deves de crear el archivo `.env` en la raiz del proyecto y poner las variables de entorno que son:

```env
PORT=3000
URI_DB=mongodb://localhost:27017/hardware
```

Si no funciona el la variable de entorno `URI_DB` cambia el **localhost** por la ip **127.0.0.1**

## Configuración yarn

Para la configuración de [yarn](https://yarnpkg.com/) y para su instalacion tenemos que ver que version de [Node.js](https://nodejs.org/) tenemos, si la version es mayor o igual a 16.10 ponemos el comando:

```sh
corepack enable
``` 

Si es menor a la version 16.10 es el siguiente comando:

```sh
npm i -g corepack
```

## Inicio de proyecto con yarn 

Para la inicializacion del proyecto usando yarn tenemos que usar el comando:

```sh
yarn init
```

El cual nos genra un archivo llamado `package.json` el cual le vamos agregar los siguente por de bajo de **_license_**:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

### Instalación de paquetes

Para la instalcion de paquetes se usa el comando `yarn add <namePack>`, los paquetes que utilizaran son:

|Paquetes|Nombre de instalacion|Version|
|:---- |:----:|:----:|
|[dotenv](https://github.com/motdotla/dotenv)|dotenv|16.0.3|
|[Express](http://expressjs.com/)|express|4.18.2|
|[Mongoose](https://mongoosejs.com/)|mongoose|6.7.3|
|[Pug](https://pugjs.org/api/getting-started.html)|pug|3.0.2|

Comando de instalacion:

```sh
yarn add dotenv express mongoose pug
```
El cual nos quenera dos archivos el directorio `node_modules/` y el archivo `yarn.lock`.

En el repositorio no se vera el directorio `node_modules/` por que es un archi que se puede volver a construir de nuevo con el comando `yarn install` 

## Creación de variables de entorno

Tenemos que crear el archivo `.env` y declaras dos variables las cuales son:

```env
PORT=3000
URI_DB=mongodb://localhost:27017/hardware
```
de misma manera que el directorio `node_modules/` el archivo `.env` no se encontrara en el repositorio y el motivo es por que el puerto no sera el mismo ni la direccion de a la base de datos y nombre del mismo.

## Creacion de proyecto

1. Crearemos nuestro archivo [index.js](./index.js) el la raiz del proyecto.
2. Hacemos la importacion del paquete dotenv y llamamos las variables que creamos con `process.env.<Variable>`.
3. Hacemos la importacion de framework espress y llamamos la funcion de espress.
4. Tenemos que hacer que escuche le servidor por lo tanto se le declara el puerto asignado. en la variable de entorno, le podemos mandar un callback para que nos indique si esta funcioando.
5. Hacemos la conexion a la base de datos por eso creamos la carpeta `database/` y dentro de ella el archivo [config.js](./database/config.js), importamos la paqueteria de mongoose y realimos la conexión.
6. Hacemos la importacion del archivo `./database/config.js`.
7. Creamos el modelo y el esquema de la base de datos en el archivo `Hardware.js` en la carpeta `models/`
8. En la creacion del del modelo y la esquema re requiere importarl Schema y model del paquete mongoose, los componentes a tomar en cuenta en el esquema son:

|Componente|Tipo|
|:----:|:----:|
|**hardware**|String|
|**name**|String|
|**model**|String|
|**brand**|String|
|**description**|String|
|**release_year**|String|
|**image_link**|String|

9. Haremos que nuestro motor de plantilla se visualiza por lo general tenemos que crear nuestra maquetacion en la carpeta `views/` crearemos el archivo [`index.pug`](./views/index.pug) ya que nuestro motor de platilla es [Pug](https://pugjs.org/api/getting-started.html), usaremos boodtrap para la creacion de este programa por buenas normas no lo instalaremos con yarm porque este kit de herramientas es para el lado front-end por esa situacion usaremos el CDN (Content Delivery Network) porque este servidor es del lado del back-end.
10. Para jalar nuestra plantilla y que se muestre usaremos el comando `app.set('view engine', 'pug')` en el index.js desde la raiz del procyecto, tambien tenemos que redireccionamos la ruta con el `espress.get();` y dando su direccion raiz para visualizarce en el inicio de la pagina.
11. Antes de manejar la peticiones de las del CRUD tenemos que indicar que el body.parser que analiza y que los combierta en formato json. con los comando `espress.urlencoded()` y `espress.json()`
12. Ya teniendo nuestras vistas crearemos nuestro rutas y para identificar que las haciones que le vamos a declarar en el archivo [hardwareRoutes.js](./routes/hardwareRoutes.js) ubicado en la carpeta `routes/`. 
13. Creamos los controladores para determinas las acciones de nuestras rutas en el archivo [hardwareControllers.js](./controllers/hardwareControllers.js) ubicado en el archivo `controllers/`.