const db = require("mysql2/promise");

const pool = db.createPool({
    host: "localhost",
    password: "root",
    user: "root",
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