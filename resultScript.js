let arr = []

let sessionString = sessionStorage.getItem('data');
let data = JSON.parse(sessionString);

// -------your-pick---------
if (data[0] == "stone") {
    document.querySelector('#your-pick img').src = './images/stone.png';
    document.querySelector('#your-pick').style.borderColor = '#0074B6';
}
else if (data[0] == "scissor") {
    document.querySelector('#your-pick img').src = './images/scissor.png';
    document.querySelector('#your-pick').style.borderColor = '#BD00FF';
}
else if (data[0] == 'paper') {
    document.querySelector('#your-pick img').src = './images/paper.png';
    document.querySelector('#your-pick').style.borderColor = '#FFA943';
}

// -------PC pick--------
if (data[1] == 0) {
    document.querySelector('#pc-pick img').src = './images/stone.png';
    document.querySelector('#pc-pick').style.borderColor = '#0074B6';
}
else if (data[1] == 1) {
    document.querySelector('#pc-pick img').src = './images/scissor.png';
    document.querySelector('#pc-pick').style.borderColor = '#BD00FF';
}
else if (data[1] == 2) {
    document.querySelector('#pc-pick img').src = './images/paper.png';
    document.querySelector('#pc-pick').style.borderColor = '#FFA943';
}

// --------play again trigger---------
document.querySelector('#play-again').addEventListener("click", function () {
    window.location.href = 'index.html';
})


// ------------Won, Lost or Tie--------
arr[0] = "stone";
arr[1] = "scissor";
arr[2] = "paper";

if (data[0] == arr[data[1]]) {
    document.querySelector('#result-Text p:nth-child(1)').innerHTML = 'TIE UP';
    document.querySelector('#result-Text p:nth-child(2)').innerHTML = '';
    document.querySelector('#result-Text #play-again').innerHTML = 'REPLAY';
}

else if ((data[0] == "stone" && arr[data[1]] == "scissor") || (data[0] == "scissor" && arr[data[1]] == "paper") || (data[0] == "paper" && arr[data[1]] == "stone")) {
    document.querySelector('#result-Text p:nth-child(1)').innerHTML = 'YOU WON';
}