const db = require("./db");

const getAllItems = async () => {
  const conn = await db.getConnection();
  const sql = `
  SELECT item.*, category.category_name, location.location_name
  FROM item
  JOIN category ON item.item_category_id = category.id
  JOIN location ON item.item_location_id = location.id;
    `;
  const [items] = await conn.query(sql);
  conn.release();
  return items;
};

const addItem = async (item) => {
  const conn = await db.getConnection();
  const sql = `INSERT INTO item (item_name, item_quantity, item_category_id, item_location_id) VALUES (?, ?, ?, ?)`;
  const [result] = await conn.query(sql, [
    item.item_name,
    item.item_quantity,
    item.item_category_id,
    item.item_location_id,
  ]);
  conn.release();
  return result;
};

const getItemById = async (id) => {
  const conn = await db.getConnection();
  const sql = `
        SELECT * FROM item WHERE id = ?
    `;
  const [items] = await conn.query(sql, [id]);
  conn.release();
  return items;
};

const deleteItemById = async (id) => {
  const conn = await db.getConnection();
  const sql = `
        DELETE FROM item WHERE id = ?
    `;

  const [result] = await conn.query(sql, [id]);
  conn.release();
  return result;
};

module.exports = { getAllItems, getItemById, addItem, deleteItemById };
