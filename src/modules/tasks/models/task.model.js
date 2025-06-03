const db = require('../../../config/db');

const getTasks = async (id = '') => {
    try {
        return await db.any('SELECT t.id, t.title, t.description FROM tasks t');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getTasks
};