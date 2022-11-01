const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    correo:{
        type:String,
        require:true,
        unique: true
    },
    telefono:{
        type:Number,
        require: true
    },
    rol:{
        type:String,
        require: true
    },
    //fec_cre {
        //type:Date,
        //default:Date.now()
    //}
});

module.exports =mongoose.model('usuario', UsuarioSchema)