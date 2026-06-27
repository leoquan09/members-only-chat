const pool = require('../config/pool.js');
const hash = require('../helpers/hash.js');

async function findUserByUsername(user) {
    const query = `
    SELECT * FROM users
    WHERE username = $1;
    `;
    const { rows } = await pool.query(query, [user]);
    return rows[0];
};

async function findUserById(id) {
    const query = `
    SELECT * FROM users
    WHERE id = $1;
    `;

    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

async function addUser(username, email, password) {
    const query = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
    `;
    
    const hashedPassword = await hash.hashPassword(password);
    await pool.query(query, [username, email, hashedPassword]);
};

module.exports = {
    findUserById,
    findUserByUsername,
    addUser
};