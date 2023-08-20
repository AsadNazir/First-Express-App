const db = require("./db");

const getAllCategories = async () => {
    const conn = await db.getConnection();
    const sql = `
        SELECT * FROM category
    `;
    const [categories] = await conn.query(sql);
    conn.release();
    return categories;
}

const getCategoryById = async (id) => {
    const conn = await db.getConnection();
    const sql = `
        SELECT * FROM category WHERE id = ?
    `;
    const [categories] = await conn.query(sql, [id]);
    conn.release();
    return categories;
}

module.exports = { getAllCategories, getCategoryById };

    