const express = require('express');
const Asport = require('./json/macchine_sportive.json'); //Copia il file people.json dentro la variabile people
const Aut = require('./json/macchine_utilitarie.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    utilitarie: Aut['Auto SUV'],
    sportive: Asport['Auto utilitarie']

    });
});

app.get('/', (req, res) => {

    res.render('home', {
        title: 'Homepage',
        utilitarie: Aut['Auto SUV'],
        sportive: Asport['Auto Sportive']
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});