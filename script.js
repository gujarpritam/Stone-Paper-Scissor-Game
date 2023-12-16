// -------Rules---------
function rules() {
    document.getElementById('game-rules').setAttribute("style", "display:flex");
}

function closeRules() {
    document.getElementById('game-rules').setAttribute("style", "display:none");
}

// pickup either stone, scissor or paper
const input = Array.from(document.getElementsByClassName('stone-scissor-paper'));
input.forEach(element => {
    element.onclick = function () {
        let random = Math.floor(Math.random() * 3);
        let arr = [];
        arr[0] = element.id;
        arr[1] = random;
        sessionStorage.setItem('data', JSON.stringify(arr));
        window.location.href = 'resultIndex.html';
    }
});

if (localStorage.hasOwnProperty('yourScore')) {
    document.querySelector('#your-score div').innerHTML = JSON.parse(localStorage.getItem('yourScore'));
}

if (localStorage.hasOwnProperty('computerScore')) {
    document.querySelector('#computer-score div').innerHTML = JSON.parse(localStorage.getItem('computerScore'));
}