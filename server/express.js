const express = require('express');
const path =require('path');

var app = express();

var PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get('/api/test', (req,res) => {
    res.send({'hello':'from express'});
});

app.post('/api/users', (req,res) => {
    console.log(req.body);
    res.send({'hello':'from express'});
});

// app.get('/', (req,res) => {
//    res.sendFile(path.join(__dirname, '/../', 'client', 'public'));
// });
app.use('/', express.static(path.join(__dirname, '/../', 'client', 'public')))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});