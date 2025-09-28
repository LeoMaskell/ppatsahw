const express = require('express');
const port = 3000;
const app = express();

const db = require('./backend/database/db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('hidden'));

// API routes
app.post('/api/signUp', (req, res) => {
    console.log('user attempted to sign up');
    const { email, username, password } = req.body;
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.run(query, [username, email, password], function(err) {
        if (err) {
            console.error('Error during sign up', err);
            res.status(500).json({ success: false, message: 'Error during sign up' });
            console.log('signup failed');
        } else {
            res.json({ success: true, userId: this.lastID });
            console.log('signup worked');
        }
    });
});

app.post('/api/signIn', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
    console.log('user attempted to sign in');
    db.get(query, [username, password], (err, row) => {
        if (err) {
            console.error('Error during sign in', err);
            res.status(500).json({ success: false, message: 'Error during sign in' });
            console.log('there was an error');
        } else if (row) {
            res.json({ success: true, userId: row.id });
            console.log('user signed in');
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



// static hidden files
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/hidden/style.css');
});

app.get('/frontend.js', (req, res) => {
    res.sendFile(__dirname + '/hidden/frontend.js');
});

app.get('/msgStyle.css', (req, res) => {
    res.sendFile(__dirname + '/hidden/msgStyle.css');
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log();
});