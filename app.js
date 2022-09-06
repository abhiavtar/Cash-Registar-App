const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMesssage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (billAmount >= cashGiven) {
      const billAmountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(billAmountToBeReturned);
    } else {
      showErrorMessage("cash provided should be greater than the bill amount");
    }
  } else {
    showErrorMessage("invalid Bill Amount");
  }
});

function hideMessage() {
  errorMesssage.style.dispaly = "none";
}

function calculateChange(billAmountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(
      billAmountToBeReturned / availableNotes[i]
    );
    billAmountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showErrorMessage(message) {
  errorMesssage.style.dispaly = "block";
  errorMesssage.innerText = message;
}
