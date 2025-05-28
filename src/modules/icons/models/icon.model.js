const db = require('../../../config/db');

const getIcons = async () => {
    try {
        return await db.any('SELECT * FROM icons');
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    getIcons
};