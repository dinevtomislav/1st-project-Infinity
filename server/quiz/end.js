const saveScoreBtn = document.getElementById("saveScoreBtn")
const finalScore = document.getElementById("finalScore")

const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

saveHighScore=e=>{
    console.log("clicked")

    const score = {
        score: mostRecentScore,
        };
        highScores.push(score);
        highScores.shift();
        highScores.sort ((a, b) => b.score - a.score);
        highScores.splice(5);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        //window.location.assign("index.html");
        console.log(highScores)
}
