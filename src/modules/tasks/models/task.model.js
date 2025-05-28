const db = require('../../../config/db');

const getTasks = async (id = '') => {
    try {
        return await db.any('SELECT * FROM tasks');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getTasks
};