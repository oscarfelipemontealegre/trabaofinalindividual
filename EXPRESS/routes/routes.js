const express = require('express');
const router = express.Router();
const contraladorUsuario= require('../controllers/usuarioController')

router.get('./crearUsuario', contraladorUsuario.crearUsuario)
router.post('./obtenerUsario',contraladorUsuario.obtenerUsuarioss)
router.put('./actualizar:id',contraladorUsuario.actualizarUsuario)
router.delete('./eliminar:id',contraladorUsuario.eliminarUsuario)
router.get('./obtenerUnico:id',contraladorUsuario.obtenerUsuarioEspecifico)


module.exports=router;
