// --------play again trigger---------
document.querySelector('#play-again').addEventListener("click", function () {
    window.location.href = 'index.html';
});

// -------Rules---------
function rules() {
    document.getElementById('game-rules').setAttribute("style", "display:flex");
}

function closeRules() {
    document.getElementById('game-rules').setAttribute("style", "display:none");
}