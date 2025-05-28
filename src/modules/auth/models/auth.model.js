const db = require('../../../config/db');

const register = async (data) => {
    const { full_name, email, password, token, token_expired_at } = data;
    return db.one(
        `INSERT INTO users(full_name, email, password, token, token_expired_at, created_at, updated_at)
        VALUES($1, $2, $3, $4, $5, NOW(), NOW()) RETURNING *`,
        [full_name, email, password, token, token_expired_at]
  );
}

const checkEmail = async (email) => {
    return db.one(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );
}

const updateLogin = async (data) => {
    const { id, token, token_expired_at } = data;
    return db.one(
        `UPDATE users 
        SET token = $1, token_expired_at = $2, last_login = NOW(), updated_at = NOW() 
        WHERE id = $3 RETURNING *`,
        [token, token_expired_at, id]
    );
}

module.exports = {
    register,
    checkEmail,
    updateLogin
};