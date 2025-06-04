const db = require('../../../config/db');
        
const getStatus = async () => {
    try {
        return await db.any(`
            SELECT 
                s.id, 
                s.status_name, 
                i.icon, 
                s.is_active, 
                s.is_deleted
            FROM status s 
            LEFT JOIN icons i ON s.icon_id=i.id
            ORDER BY s.seq ASC
        `);
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getStatus
};