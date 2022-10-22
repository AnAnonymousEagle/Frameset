// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }

let resultButton = document.getElementById("resultButton");
resultButton.disabled = "disabled";
resultButton.style.opacity = "0.5";
resultButton.style.cursor = "not-allowed";
resultButton.style.userSelect = "none";


function showButton() {
  let firstOperand = +document.getElementById("firstOperand").value;
  let secondOperand = +document.getElementById("secondOperand").value;

  if (firstOperand, secondOperand != 0) {
    resultButton.disabled = false;
    resultButton.style.opacity = "1";
    resultButton.style.cursor = "pointer";
  } else {
    resultButton.disabled = "disabled";
    resultButton.style.opacity = "0.5";
    resultButton.style.cursor = "not-allowed";
  }
}

function getResult() {
  let firstOperand = +document.getElementById("firstOperand").value;
  let secondOperand = +document.getElementById("secondOperand").value;

  let myResult = firstOperand + secondOperand;

  document.getElementById("resultSum").value = myResult;

  if (myResult == 69) {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ";
  } else {
    document.getElementById("resultSum").value = myResult;
  }
}


// https://stackoverflow.com/questions/10709884/show-button-if-input-is-not-empty
