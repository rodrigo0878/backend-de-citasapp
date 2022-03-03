const express = require('express');
const routes = require('./routes');
const bodyParser= require('body-parser');
const cors = require('cors');
require('dotenv').config();



const app = express()


//habilitar cors  restringuido
/*const whitelist =['http://localhost:3000'];
const corsOption = {


        origin:(origin, callback) =>{

                const existe = whitelist.some( dominio => dominio === origin);
                if( existe ){

                        callback(null,true)

                }else{

                        callback(new Error('no permitido por cors'))

                }



        }





}
app.use(cors(corsOption));
*/
app.use(cors());


const port =4000; 



const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        mongoose.Promise = global.Promise

        await mongoose.connect( 'mongodb+srv://joaco:Joaquin123@cluster0.iz2cw.mongodb.net/veterinaria', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

//activamos el body-parser pra poder leer el body desde postman
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//habilitamos el routing con un middleware
app.use('/', routes())

//llamamos a la base de d atos
dbConnection()



app.listen(port, () => {
    console.log('Servidor corriendo en puerto', port )
})
