const { Router } = require("express");
const router = Router();
const ruta = '/api';
const MaquinasControllers = require("../Controllers/Maquinas_controllers");

router.get(ruta + '/Maquinas',MaquinasControllers.getAll);
router.post(ruta + '/Maquinas',MaquinasControllers.create);

module.exports = router;