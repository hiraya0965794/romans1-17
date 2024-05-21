const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.connect((err) => {
  if (err) throw err
    console.log("Connect to PostgresSQL successfully!")
})

module.exports = pool