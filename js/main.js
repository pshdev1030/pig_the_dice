var btn1El = document.querySelector(".container button.btn1");
var btn2El = document.querySelector(".container button.btn2");
var btn3El = document.querySelector(".container button.btn3");
var player1El = document.querySelector(".container input.score1");
var player2El = document.querySelector(".container input.score2");
var sum = 0;
var init = 1;

btn1El.addEventListener("click", roll);
btn3El.addEventListener("click", hold);

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function roll() {
  var diceN = dice();
  btn2El.innerHTML = diceN;
  console.log(diceN);
  if (diceN === 1) {
    sum = 0;
    hold();
    return;
  }
  sum += diceN;
}

function hold() {
  if (init === 1) {
    console.log("player1");
    player1El.value = sum;
    init = 2;
    sum = 0;
  } else {
    console.log("player2");
    player2El.value = sum;
    init = 1;
    sum = 0;
  }
}
