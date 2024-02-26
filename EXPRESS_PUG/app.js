const express = require('express');
const autoSportive = require('./json/macchine_sportive.json');
const autoUtilitarie = require('./json/macchine_utilitarie.json');
const tutteLeAuto = require('./json/tutte_le_auto.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/css'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Homepage',
        utilitarie: autoUtilitarie['Auto utilitarie'],
        sportive: autoSportive['Auto Sportive']
    });
});

app.get('/sportive', (req, res) => {
    res.render('macchine', {
        title: 'Macchine Sportive',
        auto: autoSportive['Auto Sportive']
    });
});

app.get('/utilitarie', (req, res) => {
    res.render('macchine', {
        title: 'Macchine Utilitarie',
        auto: autoUtilitarie['Auto utilitarie']
    });
});

app.get('/auto/:id', (req, res) => {
    const autoId = req.params.id;
    const auto = tutteLeAuto.Auto.find((auto) => auto.id === parseInt(autoId));
    if (auto) {
        res.render('dettagli', {
            title: `About ${auto.nome}`,
            d: auto,
            variabile: 'Auto'
        });
    } else {
        res.status(404).send('Auto non trovata');
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
