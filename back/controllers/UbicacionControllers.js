const { Ubicaciones } = require("../database/db");

module.exports = {
  async All(req, res) {
    let ubicaciones = await Ubicaciones.findAll({
      include: {
      association: "residente"
  }});
    res.json(ubicaciones);
  },
};