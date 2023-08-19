const db =require("./db");

const getUserByNameAndPassword = async (name, password) => {

    const conn = await db.getConnection();
    const [rows] = await conn.query("SELECT * FROM user WHERE username = ? AND password = ?", [name, password]);
    conn.release();
    return rows;
}

const getUserById = async (id) => {
    const conn = await db.getConnection();
    const [rows] = await conn.query("SELECT * FROM user WHERE id = ?", [id]);
    conn.release();
    return rows;
}


const getAllUsers = async () => {
    const conn = await db.getConnection();
    const [rows] = await conn.query("SELECT * FROM user");
    conn.release();
    return rows;

}

const addUser = async (name, password) => {

    const conn = await db.getConnection();

    const [rows2] = await conn.query("SELECT * FROM user WHERE username = ?", [name]);

    //if user already exists
    if(rows2.length > 0){
        return {affectedRows: 0};
    }

    const [rows] = await conn.query("INSERT INTO user (username, password) VALUES (?, ?)", [name, password]);
    conn.release();
    return rows;
}

    

module.exports = {getUserByNameAndPassword , addUser, getAllUsers, getUserById};