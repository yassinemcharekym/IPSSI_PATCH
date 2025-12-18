const db = require('../config/database');

function getStatus(callback) {
  callback(null, { message: 'Backend sécurisé OK ✅' });
}

module.exports = {
  getStatus
};
