const userService = require('../services/userService');

function status(req, res) {
  userService.getStatus((err, result) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(result);
    }
  });
}

module.exports = {
  status
};
