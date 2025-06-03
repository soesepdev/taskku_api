const db = require('../../../config/db');
        
const getStatus = async () => {
    try {
        return await db.any('SELECT a.name, b.icon FROM status a LEFT JOIN icons b ON a.icon_id=b.id');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getStatus
};