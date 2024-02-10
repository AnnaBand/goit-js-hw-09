function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let intervalId;

  startButton.addEventListener('click', () => {
    startButton.disabled = true; // Turn off "Start"
    stopButton.disabled = false; // Turn on "Stop"
    intervalId = setInterval(changeBackgroundColor, 1000);
  });

  stopButton.addEventListener('click', () => {
    startButton.disabled = false; // Turn on "Start"
    stopButton.disabled = true; // Turn off "Stop"
    clearInterval(intervalId);
  });

  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
});