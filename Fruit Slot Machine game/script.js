// Slot values elements
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");

// Button to start the slot machine
const startButton = document.getElementById("startButton");
// Element to display the result
const result = document.getElementById("result");

// Array of possible slot values (fruits)
const values = ["🍒", "🍋", "🍇", "🍉", "🍓"];

// Function to get a random value from the slot values array
function getRandomValue() {
  return values[Math.floor(Math.random() * values.length)];
}

let animationId;

// Function to start the slot machine
function startSlotMachine() {
  // Clear any existing interval
  if (animationId) clearInterval(animationId);

  // Set an interval to update the slot values every 100ms
  animationId = setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
  }, 100);

  // Stop the slot machine after 1 second and check the result
  setTimeout(() => {
    clearInterval(animationId);
    checkResult();
  }, 1000); // Spins for 1 second
}

// Function to check the result and display a message
function checkResult() {
  const val1 = value1.innerText;
  const val2 = value2.innerText;
  const val3 = value3.innerText;

  console.log(val1, val2, val3);

  // Check if all three slot values are the same
  if (val1 === val2 && val2 === val3) {
    result.textContent = "JACKPOT! 🎉";
    result.style.color = "gold";
  } else {
    result.textContent = "Try Again!";
    result.style.color = "white";
  }
}

// Add event listener to the start button to trigger the slot machine
startButton.addEventListener("click", startSlotMachine);

// To increase or decrease the probability of winning, you can modify the 'values' array.
// Adding more instances of a particular value will increase the chances of that value appearing.