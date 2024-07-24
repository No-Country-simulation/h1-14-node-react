const { Especialidades } = require("../app/database/db");

module.exports = {
  async All(req, res) {
    let especialidades = await Especialidades.findAll({
      include: {
      association: "Medicos"
  }});
    res.json(especialidades);
  },
};
