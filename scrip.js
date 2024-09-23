let amount = 3.80; // Starting amount
const increment = 0.10; // Increment value
let intervalId = null; // To store the interval ID
const displayElement = document.getElementById('amount');

function updateDisplay() {
    displayElement.textContent = `$${amount.toFixed(2)}`; // Update the display
}

document.getElementById('startBtn').addEventListener('click', () => {
    if (!intervalId) { // Start counting only if it's not already running
        intervalId = setInterval(() => {
            amount += increment; // Increment the amount
            updateDisplay();
        }, 1000); // Run every 1000 milliseconds (1 second)
    }
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(intervalId); // Stop the counting
    intervalId = null; // Reset the interval ID
});

document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(intervalId); // Stop the counting
    intervalId = null; // Reset the interval ID
    amount = 3.80; // Reset amount
    updateDisplay(); // Update the display
});

// Initial display update
updateDisplay();
