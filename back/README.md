<img align="right" width="250" src="https://github.com/user-attachments/assets/702f2c28-37a4-4aff-bc6f-9c4c4f05d777">

# Justiona.io

> ### Equipo h1-14-node-react

# 💻 Backend

## Lista de comandos:
- npm run dev => inicializa el proyecto,
- npm run createdb => crea las tablas en la base de datos,
- npm run dropdb => borra las tablas en la base de datos,
- npm run chargerdata => ingresa algunos datos base en la base de datos,
- npm run dropdata => borra los datos ingresados con el comando chargerdata.

## 🚀 Cómo correr el proyecto localmente

### Requerimientos mínimos necesarios para ejecutar la App localmente
- Tener instalado Node, versión 20 o mayor.
- Tener instalado MySQL, versión 8 o mayor. O MariaDB, versión 10 o mayor.

1. Clonar el repositorio en el pc:
   
    `git clone https://github.com/No-Country-simulation/h1-14-node-react.git`

3. Configuración de la base de datos:

   ------> <------

4. Configuración de variables de entorno:
   
   Debes crear un archivo **.env** en la ruta principal del proyecto y agregarle las siguientes variables de entorno, con la información obtenida de la BD:
```sh
DB_HOST: {Url de Host - Ejemplo: "http://localhost:{PORT}/"}
DB_PORT: {Número del puerto - Ejemplo: "1234"}
DB_NAME: {Nombre de la Base de Datos - Ejemplo: "justina"}
DB_USERNAME: {Nombre de usuario - Ejemplo: "root"}
DB_PASSWORD: {Password - Ejemplo: "password12345"}
DB_DIALECT: 'mysql'

TOKEN_KEY: 'N13nC1en4ñ0510s48r4S'
```

5. Luego de haber configurado lo anterior, ya puedes correr la API del proyecto localmente.
   
   Para ello deberás abrir la consola y ejecutar los siguientes comandos:
 ```sh
cd back
npm install
npm run dev
```

6. Listo!
   
   Cuando veas en pantalla algo similar a:
<img width="250" src="https://github.com/user-attachments/assets/fcb99781-c2dc-4444-bcf1-90bc345937ae">

   Ya está corriendo el backend localmente. Ahora sigue los siguientes pasos, para ejecutar el Frontend de la Web App. [Frontend](../front/README.md)

## Documentacion de los EndPoints

Puedes consultar la documentación de los Endpoints una vez corrido el poyecto, accediendo a la ruta: 
 ```sh
https://{{url-local}}/api-docs
```


