// Acá tenemos todas las funciones que tendran las rutas(routes/usuarios.js)
const {response} = require('express')

const usuariosGet = (req, res = response) => {
    // Parametro de query, para acceder a ellos se hace como está en la siguiente linea.
    // Lo interesante de estos, es que si por ejemplo nos envian, nombre, apellido, edad, direccion
    // pero nosotros solo recibimos algunos(en este ejemplo nombre y profesion), la api no se cae, ya que
    // el resto de parametros los obvia, y si agrego un parametro que no viene(como profesion) este quedara 
    // como null, por lo tanto, nunca tendremos un error(como si ocurre en.net)
    const {nombre = 'Sin nombre', apellido} = req.query;

    res.status(403).json({//Si queremos manejar codigos de errores, se agrega el status, de lo contrario se puede obviar
        msg: 'get API - Controlador',
        nombre,
        apellido
    });
    // a diferencia del json de abajo, que devuelve un texto, por lo general, en la mayoria
    // de los desarrollos, siempre se devuelve un objeto(como está arriba)
    // res.json('Hello world') // el json devuelve el hello world como un json(es lo mas usado)
    // res.send('Hello World') //el send devuelve el hello world como un archivo html
  }

const usuariosPut = (req, res = response) => {
    // Parametros de segmento, una vez configurado(routes/usuarios.js) con la sentencia params
    // podemos acceder al valor
    const id = req.params.id
    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPost = (req, res = response) => {
const {nombre, edad} = req.body //Parametro body, asi recibimos los parametros de entrada enviado por front desde el body

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
  }