const { Pool, Client } = require('pg')

const connectionString = 'postgresql://postgres:password@my_postgres:5432/postgres'
/*
const pool = new Pool({
        connectionString: connectionString,
});

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
});
*/
const client = new Client({
    connectionString: connectionString,
})
client.connect()
client.query('SELECT * FROM ROOMMATES', (err, res) => {
    console.log(err, res)
    client.end()
})