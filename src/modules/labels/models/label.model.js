const db = require('../../../config/db');

const getLabels = async () => {
    try {
       return await db.any('SELECT * FROM labels');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getLabels
};