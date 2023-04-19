const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json')
const logger = require("./logger");

const app = express();
app.use(cors());
app.use(express.json())

app.use(logger);

app.get('/', (req, res) => {
    res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
})

app.get('/quotes', (req, res) => {
    res.send(quotes);
})

app.get('/quotes/random', (req, res) => {
    const randIdx =  Math.floor(Math.random() * quotes.length)
    res.send(quotes[randIdx]);
})

app.get('/quotes/:id', (req, res) => {
    const idx = req.params.id;

    const quote = quotes[idx-1]


    if (!quote){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.send(quote);
    }

})

app.post("/quotes", (req, res) => {
    const quote = req.body; 

    quotes.push(quote)

    res.status(201).send(quote);
})


module.exports = app
