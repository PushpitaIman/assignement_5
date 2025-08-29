// ************************  heartCounter Section **************************
const heartCoins = document.getElementsByClassName("heart-coins");
let heartCounter = parseInt(document.getElementById("heart-Counter").innerText);

for (const heartCoin of heartCoins) {
  heartCoin.addEventListener("click", function () {
    heartCounter++;
    document.getElementById("heart-Counter").innerText = heartCounter;
  });
}


// ************************  Copy function Section **************************

const copyBtns = document.getElementsByClassName("copy-btn");
let copyCount = parseInt(document.getElementById("copy-cnt").innerText);

for (let i = 0; i < copyBtns.length; i++) {
  const btns = copyBtns[i];

const phnNums = document.getElementsByClassName("phn-num");
  const phoneNum = phnNums[i].innerText;

  btns.addEventListener("click", function () {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert(`Copied ${phoneNum}`);
      })
      
    copyCount++;
    document.getElementById("copy-cnt").innerText = copyCount;
  });
}


// ************************  call function Section **************************

let coins = parseInt(document.getElementById("all-coin").innerText);
const callNumber = document.getElementsByClassName("phn-num");
const callButtons = document.getElementsByClassName("call-btn");
const serviceTitle = document.getElementsByClassName("service-title");


for (let i = 0; i < callButtons.length; i++) {
  const btn = callButtons[i];
  const service = serviceTitle[i].innerText;
  const numbers = callNumber[i].innerText;

  btn.addEventListener("click", function () {
    if (coins < 20) {
      alert("❌ You don't have enough coins! Please Recharge");
      return;
    }

    else alert(`📞 Calling ${service} ${numbers}`);

    coins -= 20;
    document.getElementById("all-coin").innerText = coins;

    // **************************call history**************************
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    const historyList = document.getElementById("call-history");
    
    const callListCon = document.createElement("div");
        callListCon.classList =
        "flex items-center justify-between max-w-md mx-auto mt-3 bg-gray-100 rounded-xl p-4";
        callListCon.innerHTML = `
        <div>
            <h2 class="font-semibold text-[16px]">${service}</h2>
            <p class="text-gray-700 text-sm font-normal">${numbers}</p>
        </div>

        <span class="text-gray-500 text-base">${time}</span>
                               `;
    historyList.appendChild(callListCon);
  });
}

// ************************  clear function Section **************************

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function () {
  const history = document.getElementById("call-history");

  history.innerHTML = "";
  alert("History Cleared!!!!!!!");
});



























