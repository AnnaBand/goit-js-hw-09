function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let intervalId;

  startButton.addEventListener('click', () => {
    startButton.disabled = true; // Wyłącz przycisk "Start"
    stopButton.disabled = false; // Włącz przycisk "Stop"
    intervalId = setInterval(changeBackgroundColor, 1000); // Uruchom funkcję co sekundę
  });

  stopButton.addEventListener('click', () => {
    startButton.disabled = false; // Włącz przycisk "Start"
    stopButton.disabled = true; // Wyłącz przycisk "Stop"
    clearInterval(intervalId); // Zatrzymaj zmianę koloru
  });

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor(); // Ustaw losowy kolor tła
  }
});