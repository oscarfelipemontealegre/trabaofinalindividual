const { config } = require('dotenv');
const mongoose = require ('mongoose');
require ('dotenv').config({path:'config.env'});

const conectarDB = async()=>{
    try{
        await mongoose.connect(process.env.conecxion_Url,{
                useNewUrlParser: true,
                useUniFiedTopology:true,
        })
        console.log( 'BD Conectada');

    } catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports=conectarDB