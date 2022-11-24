# CRUD Hardware 

## Indice

- [CRUD Hardware](#crud-hardware)
  - [Indice](#indice)
  - [Inicio de clonación de proyecto](#inicio-de-clonación-de-proyecto)
  - [Configuración yarn](#configuración-yarn)
  - [Inicio de proyecto con yarn](#inicio-de-proyecto-con-yarn)
    - [Instalación de paquetes](#instalación-de-paquetes)

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
|:------:|:-----:|:-----:|
|[dotenv](https://github.com/motdotla/dotenv)|dotenv|16.0.3|
|[Express](http://expressjs.com/)|express|4.18.2|
|[Mongoose](https://mongoosejs.com/)|mongoose|6.7.3|
|[Pug](https://pugjs.org/api/getting-started.html)|pug|3.0.2|

Comando de instalacion:

```sh
yarn add dotenv express mongoose pug
```
El cual nos quenera dos archivos el directorio `node_modules/` y el archivo `yarn.lock`
