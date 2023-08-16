const db =require("../db");

const getUserByNameAndPassword = async (name, password) => {

    const conn = await db.getConnection();
    const [rows] = await conn.query("SELECT * FROM user WHERE username = ? AND password = ?", [name, password]);
    conn.release();
    return rows;
}
    

module.exports = {getUserByNameAndPassword};