const MaquinasControllers = {};
const Maquinas = require('../Maquinas.json')

MaquinasControllers.getAll = (req, res) => {
    res.json(Maquinas);
}

MaquinasControllers.create = (req, res) => {
    const id = Maquinas.length + 1;
    const maquinaNueva = req.body;
    maquinaNueva["id"] = id;
    Maquinas.push(maquinaNueva);
    res.json(maquinaNueva);

    // const newmaquina = req.body;
    // Maquinas.push(newmaquina);
    // res.json(newmaquina);
    
}

module.exports = MaquinasControllers;