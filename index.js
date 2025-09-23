const express = require('express');
const port = 3000;
const app = express();

const db = require('./backend/db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));

// API routes
app.post('/api/signUp', (req, res) => {
    const { username, password } = req.body;
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.run(query, [username, password], function(err) {
        if (err) {
            console.error('Error during sign up', err);
            res.status(500).json({ success: false, message: 'Error during sign up' });
        } else {
            res.json({ success: true, userId: this.lastID });
        }
    });
});

app.post('/api/signIn', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.get(query, [username, password], (err, row) => {
        if (err) {
            console.error('Error during sign in', err);
            res.status(500).json({ success: false, message: 'Error during sign in' });
        } else if (row) {
            res.json({ success: true, userId: row.id });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});



// pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/home.html');
});

app.get('/signIn.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/signIn.html');
});

app.get('/signUp.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/signUp.html');
});



// static files
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/static/style.css');
});






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log();
});