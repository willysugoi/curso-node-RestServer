// Creamos nuestro servidor desde una clase
const express = require('express')
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares(se reconocen, porque siempre utilizan el ".use")
        this.middlewares();

        // Rutas de mi app
        this.routes();
    }

    middlewares(){
        // Cors, nos permite restringir quien puede acceder a nuestra api
        this.app.use(cors());

        // Lectura y parseo del body, en resumen esta linea nos permite recibir todo lo que nos envian
        // desde el front y guardar esa informacion como json.
        // Todo el codigo para recibir y parsear se utiliza en controllers/usuarios.js
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }
}

module.exports = Server;