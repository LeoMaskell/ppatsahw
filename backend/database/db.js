const sqlite = require('sqlite3');


const db = new sqlite.Database('./backend/database/db.sqlite', (err) => {
    if (err) {
        console.error('Error opening database', err);
    } else {
        console.log('Database opened successfully');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            email TEXT UNIQUE,
            password TEXT
        )`, (err) => {
            if (err) {
                console.error('Error creating users table', err);
            } else {
                console.log('Users table ensured');
            }
        });
    }
});

module.exports = db;