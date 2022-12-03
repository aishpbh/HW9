const sql = require('mssql')
const sqlConfig = {
  user: `DB_GROUP_01`, //process.env.DB_USER
  password: `DB_GROUP_01` ,//process.env.DB_PWD
  database: `DB_GROUP_01`,//process.env.DB_NAME
  server: `141.215.69.65`,//process.env.SERVER_HOST

  options: {
   
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

async function getConnection(){
    try {
      let pool = await new sql.ConnectionPool(sqlConfig);
      let connect = await pool.connect();
      let request = await connect.request();

        // make sure that any items are correctly URL encoded in the connection string
        return request;
       } catch (err) {
        // ... error checks
        console.log(err.message)
       }
}
module.exports = {
  getConnection
}
