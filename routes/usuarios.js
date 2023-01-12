// Para que las routes no estén en la clase server.js y tengan su propia seccion, creamos esta carpeta.
// Acá debemos crear un archivo por cada funcionalidad que tengamos, por ejemplo para la seccion
// de usuarios, empresas, vehiculos, etc...
const {Router} = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios');

const router = Router();

//Existen muchos tipos de EndPoint, a continuacion los mas utilizados 

        // Get: se utiliza para devolver información
        router.get('/', usuariosGet);

        // Put: se utiliza para actualizar información
        // Parametros de segmento, que vienen directo desde la url, para obtener sus datos
        // se hace como está a continuacion(poniendo 2 puntos y un nombre representativo)
        router.put('/:id', usuariosPut);

        // Post: se utiliza para crear nuevos registros
        router.post('/', usuariosPost);

        // Delete: se utiliza para eliminar
        router.delete('/', usuariosDelete);

module.exports = router;