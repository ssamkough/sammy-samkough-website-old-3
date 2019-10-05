var express = require("express");
var app = express();

app.get('/', (req, res) => {
    return res.send('Home Page');
});

app.get('/finances', (req, res) => {
    return res.send('Finances');
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});