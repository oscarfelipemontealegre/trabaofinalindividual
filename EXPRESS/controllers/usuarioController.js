const Usuario = require("../models/Modelousuario");


exports.crearUsuario = async (req, res) => {

    try {
        let usuario;

        // Creamos nuestro producto
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarioss = async (req, res) => {

    try {

        const usuario = await Usuario.find();
        res.json(usuario)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombre, apellido, correo, telefono,rol } = req.body;
        let usuario = await Producto.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.correo = correo;
        usuario.telefono = telefono;
        usuario.rol=rol;
        

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id },usuario, { new: true} )
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUsuarioEspecifico = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}