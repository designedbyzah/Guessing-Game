document.addEventListener("DOMContentLoaded", () => {
  let randomNumber, attemptsLeft;
  const guessInput = document.getElementById("guessInput");
  const guessButton = document.getElementById("guessButton");
  const feedback = document.getElementById("feedback");
  const attemptsLeftDisplay = document.getElementById("attemptsLeft");
  const restartButton = document.getElementById("restartButton");

  startNewGame();

  function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 3;
    attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;
    feedback.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = "none";
  }

  guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent = "Please enter a valid number between 1 and 100.";
      feedback.style.color = "yellow";
      return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
      feedback.textContent = "Congratulations! You guessed the correct number!";
      feedback.style.color = "#28a745";
      guessButton.disabled = true;
      guessInput.disabled = true;
      restartButton.style.display = "inline-block";
    } else if (attemptsLeft === 0) {
      feedback.textContent = `Game over! The correct number was ${randomNumber}.`;
      feedback.style.color = "#dc3545";
      guessButton.disabled = true;
      guessInput.disabled = true;
      restartButton.style.display = "inline-block";
    } else {
      feedback.textContent =
        userGuess < randomNumber ? "Too low!" : "Too high!";
      feedback.style.color = "orange";
    }

    attemptsLeftDisplay.textContent = `Attempts left: ${attemptsLeft}`;
  });

  restartButton.addEventListener("click", startNewGame);

  guessInput.addEventListener("input", () => {
    guessInput.value = guessInput.value.replace(/[^0-9]/g, "");
  });
});
