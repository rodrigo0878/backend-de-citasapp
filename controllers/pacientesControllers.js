const Paciente = require('../models/Paciente');

//cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next)=> {
    //todo: insertar en la base de datos
    //console.log(req.body)
    //creaos el objetyo de pacientes con los datos de body
    //const { nombre , propietario , fecha , hora , sintomas } = req.body;

    const paciente = new Paciente(req.body);
    //console.log(paciente)

    try {
        
        await paciente.save();
       // res.json({mensaje: 'el pasiente se agrego correctamente'});

    } catch (error) {
        console.log(error)
        next()
    }
    
    res.json({mensaje: 'el cliente se agrego correctamente'});
}

exports.obtienePAcientes = async(req, res, next)=>{

    try {
        
            //metado finAll para traer todos los registros de la base de datos
            const pacientes = await Paciente.find({})
            res.json(pacientes)
            //console.log(pacientes)
    
    } catch (error) {
        console.log(error)
        next()
    }
}

exports.obtienePAciente = async (req, res, next) =>{
       try {

            //se encarga de buscar un registro por su id
            const paciente = await Paciente.findById(req.params.id)
            res.json(paciente)

        } catch (error) {
            console.log(error)
            next()
        }
}

// Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Elimina un paciente por su id
exports.eliminarPaciente = async(req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}