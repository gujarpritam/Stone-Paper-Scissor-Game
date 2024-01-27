let arr = [];
let computerScore = 1;
let yourScore = 1;

let sessionString = sessionStorage.getItem('data');
let data = JSON.parse(sessionString);

let sessionDataSend = sessionStorage.getItem('dataSend');
let dataSend = JSON.parse(sessionDataSend);

// -------your-pick---------
if (data[0] === "stone") {
    document.querySelector('#your-pick img').src = './images/stone.png';
    document.querySelector('#your-pick').style.borderColor = '#0074B6';
}
else if (data[0] === "scissor") {
    document.querySelector('#your-pick img').src = './images/scissor.png';
    document.querySelector('#your-pick').style.borderColor = '#BD00FF';
}
else if (data[0] === "paper") {
    document.querySelector('#your-pick img').src = './images/paper.png';
    document.querySelector('#your-pick').style.borderColor = '#FFA943';
}

// -------PC pick--------
if (data[1] === 0) {
    document.querySelector('#pc-pick img').src = './images/stone.png';
    document.querySelector('#pc-pick').style.borderColor = '#0074B6';
}
else if (data[1] === 1) {
    document.querySelector('#pc-pick img').src = './images/scissor.png';
    document.querySelector('#pc-pick').style.borderColor = '#BD00FF';
}
else if (data[1] === 2) {
    document.querySelector('#pc-pick img').src = './images/paper.png';
    document.querySelector('#pc-pick').style.borderColor = '#FFA943';
}

// --------play again trigger---------
document.querySelector('#play-again').addEventListener("click", function () {
    window.location.href = 'index.html';
});


// ------------Won, Lost or Tie--------
arr[0] = "stone";
arr[1] = "scissor";
arr[2] = "paper";

// -----------if there is a tie----------
if (data[0] === arr[data[1]]) {
    document.querySelector('#result-Text p:nth-child(1)').innerHTML = 'TIE UP';
    document.querySelector('#result-Text p:nth-child(2)').innerHTML = '';
    document.querySelector('#result-Text #play-again').innerHTML = 'REPLAY';

    const tieUp = Array.from(document.getElementsByClassName('circle-right'));
    tieUp.forEach(element => {
        element.style.display = 'none';
    });

    // --------displaying the score on Score-board when there is a tie--------
    if (localStorage.hasOwnProperty('yourScore')) {
        document.querySelector('#your-score div').innerHTML = JSON.parse(localStorage.getItem('yourScore'));
    }

    if (localStorage.hasOwnProperty('computerScore')) {
        document.querySelector('#computer-score div').innerHTML = JSON.parse(localStorage.getItem('computerScore'));
    }
}
// --------if you win-----------
else if ((data[0] === "stone" && arr[data[1]] === "scissor") || (data[0] === "scissor" && arr[data[1]] === "paper") || (data[0] === "paper" && arr[data[1]] === "stone")) {
    document.querySelector('#result-Text p:nth-child(1)').innerHTML = 'YOU WON';
    const circleRight = Array.from(document.getElementsByClassName('circle-right'));
    circleRight.forEach(element => {
        element.style.display = 'none';
    });

    const circleLeft = Array.from(document.getElementsByClassName('circle-left'));
    circleLeft.forEach(element => {
        element.style.display = 'flex';
    });

    document.getElementById('next-button').style.display = 'inline-block';

    // --------displaying the score on Score-board when you win--------
    if (localStorage.hasOwnProperty('yourScore')) {
        let retrieveYourScore = JSON.parse(localStorage.getItem('yourScore'));
        if (dataSend === 1) {
            retrieveYourScore++;
            localStorage.setItem('yourScore', JSON.stringify(retrieveYourScore));
        }
        document.querySelector('#your-score div').innerHTML = retrieveYourScore;
    }
    else {
        localStorage.setItem('yourScore', JSON.stringify(yourScore));
        document.querySelector('#your-score div').innerHTML = yourScore;
    }

    if (localStorage.hasOwnProperty('computerScore')) {
        document.querySelector('#computer-score div').innerHTML = JSON.parse(localStorage.getItem('computerScore'));
    }
}
// -------if pc wins-------
else if ((data[0] === "stone" && arr[data[1]] === "paper") || (data[0] === "scissor" && arr[data[1]] === "stone") || (data[0] === "paper" && arr[data[1]] === "scissor")) {
    if (localStorage.hasOwnProperty('computerScore')) {
        let retrieveComputerScore = JSON.parse(localStorage.getItem('computerScore'));
        if (dataSend === 1) {
            retrieveComputerScore++;
            localStorage.setItem('computerScore', JSON.stringify(retrieveComputerScore));
        }

        document.querySelector('#computer-score div').innerHTML = retrieveComputerScore;
    }
    else {
        localStorage.setItem('computerScore', JSON.stringify(computerScore));
        document.querySelector('#computer-score div').innerHTML = computerScore;
    }

    if (localStorage.hasOwnProperty('yourScore')) {
        document.querySelector('#your-score div').innerHTML = JSON.parse(localStorage.getItem('yourScore'));
    }
}

// -------Rules---------
function rules() {
    document.getElementById('game-rules').setAttribute("style", "display:flex");
}

function closeRules() {
    document.getElementById('game-rules').setAttribute("style", "display:none");
}

// ---------------next button trigger after a win------------
document.querySelector('#next-button').addEventListener("click", function () {
    window.location.href = 'award.html';
});

sessionStorage.setItem('dataSend', JSON.stringify(0));