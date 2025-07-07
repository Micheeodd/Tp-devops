const mariadb = require('mariadb');

// Configuration de la connexion
const pool = mariadb.createPool({
  host: 'localhost',       // à adapter si besoin
  user: 'root',
  password: 'password',
  database: 'tpdevops',
  connectionLimit: 5
});

// Fonctions d'accès à la base
module.exports = {
  insertSubmission: async (name, email) => {
    let conn;
    try {
      conn = await pool.getConnection();
      await conn.query("INSERT INTO submissions (name, email) VALUES (?, ?)", [name, email]);
    } finally {
      if (conn) conn.release();
    }
  },

  getAllSubmissions: async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM submissions");
      return rows;
    } finally {
      if (conn) conn.release();
    }
  }
};
