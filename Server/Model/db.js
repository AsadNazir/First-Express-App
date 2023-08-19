const db = require("mysql2/promise");
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const pool = db.createPool({
    host: host,
    password: password,
    user: user,
    database: "web",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports ={
    getConnection : async function(){
        return await pool.getConnection(async conn => conn);
    }
}