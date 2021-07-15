/* const router = require("./auth"); */

/* events routes
/api/events 
*/

const {Router}=require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('./controllers/events');
const { validarJWT } = require('./middlewares/validar-jwt');

const router=Router();


router.delete('/:id',eliminarEvento);
//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT)
//obtener eventos
router.get('/',getEventos);

//Crear un nuevo evento
router.post('/',crearEvento);

//Actualizar un evento
router.put('/:id',actualizarEvento);


//Borrar evento

module.exports=router;