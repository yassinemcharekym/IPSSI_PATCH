const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connexion à la base de données (centralisée et sécurisée)
const db = new sqlite3.Database(
  path.join(__dirname, '../database.db'),
  (err) => {
    if (err) {
      console.error('Erreur connexion DB :', err.message);
    } else {
      console.log('Connexion DB OK ✅');
    }
  }
);

module.exports = db;
