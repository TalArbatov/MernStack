const express = require('express');
const path =require('path');
const MongoClient = require('mongodb').MongoClient;
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
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
        if(err) return console.log('ERROR: Connection to MongoDB.');
        console.log('Connection to MongoDB successful!');
        const db = client.db('UsersApp');
        db.collection('Users').insertOne({
            user: req.body.user,
            password: req.body.password,
        }, (postErr, postRes) => {
            if(postErr) return consolelog('ERROR: Post Method.');
            res.send(postRes.ops);
        })
        client.close();
    });
    console.log(req.body);
});

// app.get('/', (req,res) => {
//    res.sendFile(path.join(__dirname, '/../', 'client', 'public'));
// });
app.use('/', express.static(path.join(__dirname, '/../', 'client', 'public')))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});