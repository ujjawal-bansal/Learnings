let teamAScore = 0;
let teamBScore = 0;

// Update the score of the specified team
function updateScore(team, points) {
    if (team === 'A') {
        teamAScore += points;
        document.getElementById('teamAScore').innerText = teamAScore;
    } else if (team === 'B') {
        teamBScore += points;
        document.getElementById('teamBScore').innerText = teamBScore;
    }
}

// Reset both teams' scores to 0
function resetScores() {
    teamAScore = 0;
    teamBScore = 0;
    document.getElementById('teamAScore').innerText = teamAScore;
    document.getElementById('teamBScore').innerText = teamBScore;
}