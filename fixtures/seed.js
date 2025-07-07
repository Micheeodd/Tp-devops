const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tpdevops',
  connectionLimit: 5
});

async function seed() {
  let conn;
  try {
    conn = await pool.getConnection();

    // Créer la table si elle n'existe pas
    await conn.query(`
      CREATE TABLE IF NOT EXISTS submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)
      )
    `);

    // Supprimer les données précédentes
    await conn.query(`DELETE FROM submissions`);

    // Insérer des données de test
    await conn.query(
      `INSERT INTO submissions (name, email) VALUES (?, ?)`,
      ['Alice', 'alice@example.com']
    );

    console.log('✅ Base initialisée avec succès.');
  } catch (err) {
    console.error('❌ Erreur lors du seed :', err);
  } finally {
    if (conn) conn.release();
    process.exit();
  }
}

seed();
