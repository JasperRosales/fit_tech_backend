import pkg from 'pg';

const { Client } = pkg;

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Jrosales26",
    database: "drip"
});

client.connect()
    .then(() => console.log("Connected to the database."))
    .catch(err => console.error(" Database connection error:", err));

//TODO GENERATE A INIT DATABASE INCASE NULL

export default client;
