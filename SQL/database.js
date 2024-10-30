const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
    host: "beffohefltauidgeoetx-postgresql.services.clever-cloud.com",
    user: "uxwck8dg0rnsopy2we6a",
    password: "jbrG8TSXC6r4x3qZHTQw",
    database: "beffohefltauidgeoetx",
    port: 50013
});

// Query function to execute SQL queries
const query = async (text, params) => {
    try {
        const result = await pool.query(text, params);
        return result.rows;
    } catch (err) {
        console.error('Error executing query:', err);
        throw err;
    }
};

// Close connection pool gracefully
const closePool = async () => {
    try {
        await pool.end();
        console.log('Database connection pool closed.');
    } catch (err) {
        console.error('Error closing database connection pool:', err);
        throw err;
    }
};

// Export the query and closePool functions
module.exports = { query, closePool };
