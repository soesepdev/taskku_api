const db = require('../../../config/db');

const getProjects = async () => {
    try {
        return await db.any('SELECT a.project_name, a.is_active, a.is_deleted FROM projects a');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getProjects
};