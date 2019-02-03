const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/users', (req, res) => {
    let arr = [{name: 'Vitor', age: 24}, {name: 'Jô', age: 35}];
    res.status(200).send(arr);
})

app.listen(3000);

module.exports.app = app;