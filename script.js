// ************************  heartCounter Section **************************
const heartCoins = document.getElementsByClassName("heart-coins");
let heartCounter = parseInt(document.getElementById("heart-Counter").innerText);

for (const heartCoin of heartCoins) {
  heartCoin.addEventListener("click", function () {
    heartCounter++;
    document.getElementById("heart-Counter").innerText = heartCounter;
  });
}