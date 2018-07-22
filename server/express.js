const express = require('express');
const path =require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.get('/api/test', (req,res) => {
    res.send({'hello':'from express'});
});

app.get('/', (req,res) => {
   res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});