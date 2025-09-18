const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/frontend/home.html');
});

// static files
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/static/style.css');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});