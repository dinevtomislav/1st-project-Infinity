const express = require('express');
const cors = require('cors');
const questions = require('./questions')
const logger = require("./logger");
const app = express();
app.use(cors());
app.use(express.json())
app.use(logger);
app.get('/', (req, res) => {
    res.send(`Welcome to the quiz API! There are ${questions.length} available.`);
})
app.get('/subjects', (req, res) => {
    res.send(questions);
})
app.get('/random', (req, res) => {
    const randIdx =  Math.floor(Math.random() * questions.length)
    res.send(questions[randIdx]);
})
app.get('/questions/:id', (req, res) => {
    const idx = req.params.id;
    const question = questions[idx-1]
    if (!question){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.send(question);
    }
})
app.get('/questions/:id/subjects/', (req, res) => {
    const idx = req.params.id;
    //const question = questions[idx-1]
    const subjects = questions[idx-1].English;
    if (!subjects){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.json(subjects);
    }
})
app.get('/questions/:id/subjects/:listindex', (req, res) => {
    const idx = req.params.id;
    const question = questions[idx-1]
    const subjects = questions[idx-1].English;
    const question1 = questions[idx-1].English[2];
    // code to get subjects by articleId
    //res.json(subjects);
    if (!question1){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.json(question1);
    }
})
app.get('/questions/:id/subjects/:listindex/question', (req, res) => {
    const idx = req.params.id;
    const question = questions[idx-1]
    const subjects = questions[idx-1].English;
    const questn = questions[idx-1].English[1]["question2"];
    // code to get subjects by articleId
    //res.json(subjects);
    if (!questn){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.json(questn);
    }
})
app.get('/questions/:id/subjects/:listindex/answer', (req, res) => {
    const idx = req.params.id;
    const question = questions[idx-1]
    const subjects = questions[idx-1].English;
    const answer = questions[idx-1].English[1]["answer"];
    // code to get subjects by articleId
    //res.json(subjects);
    if (!answer){
        res.status(404).json({message: `Quote with id ${idx} not found`})
    } else {
        res.json(answer);
    }
})
app.post("/", (req, res) => {
    const question = req.body;
    quotes.push(question)
    res.status(201).send(question);
})
module.exports = app
