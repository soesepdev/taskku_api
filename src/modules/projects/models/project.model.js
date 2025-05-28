const db = require('../../../config/db');

const getProjects = async () => {
    try {
        return await db.any('SELECT * FROM projects');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getProjects
};