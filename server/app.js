// const express = require('express');
// const cors = require('cors');
// const questions = require('./questions.json')
// const logger = require("./logger");
// const app = express();
// app.use(cors());
// app.use(express.json())
// app.use(logger);
// app.get('/', (req, res) => {
//     res.send(`Welcome to the quiz API! There are ${questions.length} available.`);
// })
// app.get('/subjects', (req, res) => {
//     res.send(questions);
// })
// app.get('/random', (req, res) => {
//     const randIdx =  Math.floor(Math.random() * questions.length)
//     res.send(questions[randIdx]);
// })
// app.get('/questions/:id', (req, res) => {
//     const idx = req.params.id;
//     const question = questions[idx-1]
//     if (!question){
//         res.status(404).json({message: `Quote with id ${idx} not found`})
//     } else {
//         res.send(question);
//     }
// })
// app.get('/questions/:id/subjects/', (req, res) => {
//     const idx = req.params.id;
//     //const question = questions[idx-1]
//     const subjects = questions[idx-1].English;
//     if (!subjects){
//         res.status(404).json({message: `Quote with id ${idx} not found`})
//     } else {
//         res.json(subjects);
//     }
// })
// app.get('/questions/:id/subjects/:listindex', (req, res) => {
//     const idx = req.params.id;
//     const question = questions[idx-1]
//     const subjects = questions[idx-1].English;
//     const question1 = questions[idx-1].English[2];
//     // code to get subjects by articleId
//     //res.json(subjects);
//     if (!question1){
//         res.status(404).json({message: `Quote with id ${idx} not found`})
//     } else {
//         res.json(question1);
//     }
// })
// app.get('/questions/:id/subjects/:listindex/question', (req, res) => {
//     const idx = req.params.id;
//     const question = questions[idx-1]
//     const subjects = questions[idx-1].English;
//     const questn = questions[idx-1].English[1]["question2"];
//     // code to get subjects by articleId
//     //res.json(subjects);
//     if (!questn){
//         res.status(404).json({message: `Quote with id ${idx} not found`})
//     } else {
//         res.json(questn);
//     }
// })
// app.get('/questions/:id/subjects/:listindex/answer', (req, res) => {
//     const idx = req.params.id;
//     const question = questions[idx-1]
//     const subjects = questions[idx-1].English;
//     const answer = questions[idx-1].English[1]["answer"];
//     // code to get subjects by articleId
//     //res.json(subjects);
//     if (!answer){
//         res.status(404).json({message: `Quote with id ${idx} not found`})
//     } else {
//         res.json(answer);
//     }
// })
// app.post("/", (req, res) => {
//     const question = req.body;
//     quotes.push(question)
//     res.status(201).send(question);
// })
// module.exports = app

// create a link to the questions.json file 
const questions = require('./questions.json')

// create a link to the logger.js file
const logger = require("./logger");

// create a link to the express module
const express = require('express');

// create a link to the cors module
const cors = require('cors');

// complete the code to create the express app
const app = express();

// complete the code to use the cors middleware
app.use(cors());

// complete the code to use the express.json() middleware
app.use(express.json())

// complete the code to use the logger middleware
app.use(logger);

// complete the code to create a GET route for the root path
app.get('/', (req, res) => {
    res.send(`Welcome to the quiz API! There are ${questions.length} available.`);
});

// complete the code to create a GET route for the subjects path
app.get('/subjects', (req, res) => {
    res.send(questions);
});

// complete the code to create a GET route for the random path
app.get('/random', (req, res) => {
    const randIdx = Math.floor(Math.random() * questions.length)
    res.send(questions[randIdx]);
});

// complete the code to create a GET route for the questions path
app.get('/questions/:id', (req, res) => {
    const idx = req.params.id;
    const question = questions[idx - 1]
    if (!question) {
        res.status(404).json({ message: `Question with id ${idx} not found` })
    } else {
        res.send(question);
    }
});

// complete the code to create a GET route for the subjects path
app.get('/questions/:id/subjects/', (req, res) => {
    const idx = req.params.id;
    const subjects = questions[idx - 1].English;
    if (!subjects) {
        res.status(404).json({ message: `Question with id ${idx} not found` })
    } else {
        res.json(subjects);
    }
});

// complete the code to create a GET route for the subjects path
app.get('/questions/:id/subjects/:listindex', (req, res) => {
    const idx = req.params.id;
    const subjects = questions[idx - 1].English;
    const question1 = questions[idx - 1].English[2];
    // code to get subjects by articleId
    if (!question1) {
        res.status(404).json({ message: `Question with id ${idx} not found` })
    } else {
        res.json(question1);
    }
});

// next steps are to create the remaining GET routes
app.get('/questions/:id/subjects/:listindex/question', (req, res) => {
    const idx = req.params.id;
    const questn = questions[idx - 1].English[1]["question2"];
    // code to get subjects by articleId
    if (!questn) {
        res.status(404).json({ message: `Question with id ${idx} not found` })
    } else {
        res.json(questn);
    }
});

app.get('/questions/:id/subjects/:listindex/answer', (req, res) => {
    const idx = req.params.id;
    const answer = questions[idx - 1].English[1]["answer"];
    // code to get subjects by articleId
    if (!answer) {
        res.status(404).json({ message: `Question with id ${idx} not found` })
    } else {
        res.json(answer);
    }
});

// complete the code to create a POST route for the root path
app.post("/", (req, res) => {
    const question = req.body;
    questions.push(question)
    res.status(201).send(question);
}
);

// complete the code to export the app
module.exports = app;


