const db = require('../../../config/db');

const getIcons = async () => {
  try {
    return await db.any('SELECT icon_name, icon, is_active, is_deleted FROM icons ORDER BY icon_name ASC');
  } catch (err) {
    console.log(err);
    return false;
  }
};

const getIconById = async (id) => {
  try {
    return await db.oneOrNone('SELECT icon_name, icon FROM icons WHERE id = $1', [id]);
  } catch (err) {
    console.log(err);
    return false;
  }
};

const createIcon = async (data) => {
  try {
    const { icon_name, icon } = data;
    return await db.one(
        'INSERT INTO icons(icon_name, icon) VALUES ($1, $2) RETURNING *',
        [icon_name, icon]
    );
  } catch (err) {
    console.log(err);
    return false;
  }
};

const updateIcon = async (id, data) => {
  try {
    const { icon_name, icon } = data;
    return await db.oneOrNone(
      'UPDATE icons SET icon_name = $1, icon = $2 WHERE id = $3 RETURNING *',
      [icon_name, icon, id]
    );
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteIcon = async (id) => {
  try {
    return await db.result('DELETE FROM icons WHERE id = $1', [id]);
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  getIcons,
  getIconById,
  createIcon,
  updateIcon,
  deleteIcon
};