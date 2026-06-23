const pool = require('../config/pool.js');

async function findUserByUsername(user) {
    const query = `
    SELECT * FROM users
    WHERE username = $1
    `;
    const { rows } = await pool.query(query, [user]);
    return rows;
};

async function findUserById(id) {
    const query = `
    SELECT * FROM users
    WHERE username = $1
    `;

    const { rows } = await pool.query(query, [id]);
};

async function getUsers() {
    const query = `
    SELECT * FROM users
    `;

    const { rows } = await pool.query(query);
    console.log(rows);
    return rows;
};

getUsers();