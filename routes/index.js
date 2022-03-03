//traemos la funcionde express
const express = require('express')

//asifgnamos la funcion del routing
const router = express.Router();

//exportamos nuestro controlador
const pacientesControllers = require('../controllers/pacientesControllers')



//lo que se exporta al sistema
module.exports = function(){

    //Agrega nuevos pacientes via POST
    router.post('/pacientes',

    pacientesControllers.nuevoCliente
    
    );

    //obtiene todos los registros de pacientes de la base de datos
    router.get('/pacientes',
    
        pacientesControllers.obtienePAcientes
    
    );

    //obtiene un paciente en especifico (id)

    router.get('/pacientes/:id',
    
        pacientesControllers.obtienePAciente
    
    )

    // Actualizar un registro con un ID especifico
    router.put('/pacientes/:id',
        pacientesControllers.actualizarPaciente
    );

    // Elimina un paciente por su ID
    router.delete('/pacientes/:id',
        pacientesControllers.eliminarPaciente
    );



    return router
}