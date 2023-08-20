const db = require("./db");

const getAllLocations = async () => {
    const conn = await db.getConnection();
    const sql = `
        SELECT * FROM location
    `;
    const [categories] = await conn.query(sql);
    conn.release();
    return categories;
}

const getLocationById = async (id) => {
    const conn = await db.getConnection();
    const sql = `
        SELECT * FROM location WHERE id = ?
    `;
    const [categories] = await conn.query(sql, [id]);
    conn.release();
    return categories;
}

module.exports = { getAllLocations, getLocationById };

    