const db = require('./database.js');

// Get a user by ID
const getUserById = async (id) => {
    const queryText = 'SELECT * FROM users WHERE id = $1';
    return await db.query(queryText, [id]);
};

// Get a user by username and password
const getUserByUsernameAndPassword = async (username, password) => {
    const queryText = 'SELECT * FROM users WHERE username = $1 and password = $2';
    return await db.query(queryText, [username, password]);
};

// Create a new user
const createUser = async (username, emailid, password, mobilnumber) => {
    const queryText = `
        INSERT INTO users (username, emailid, password, mobilnumber) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *
    `;
    const values = [username, emailid, password, mobilnumber];
    return await db.query(queryText, values);
};

// Update user details
const updateUser = async (id, username, emailid, password, mobilnumber) => {
    const queryText = `
        UPDATE users 
        SET username = $1, emailid = $2, password = $3, mobilnumber = $4 
        WHERE id = $5 
        RETURNING *
    `;
    const values = [username, emailid, password, mobilnumber, id];
    return await db.query(queryText, values);
};

module.exports = { getUserById, getUserByUsernameAndPassword, createUser, updateUser };