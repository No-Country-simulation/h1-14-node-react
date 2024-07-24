const { Users } = require("../database/db");

module.exports = {
  async All(req, res) {
    let users = await Users.findAll({
      include: {
          association: "domicilio"
      }
    });
    res.json(users);
  },
};
