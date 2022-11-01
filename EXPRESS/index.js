const express = require('express');
const conectarDB=require('./config/dbusuario');
const cors=require('cors')

const apps = express();
conectarDB();

apps.use(cors())
apps.use(express.json());

apps.use('/api/usuarios',require('./routes/routes'))


apps.listen(4000, () =>{
    console.log('ejecutando en http://localhost:4000/')
})
