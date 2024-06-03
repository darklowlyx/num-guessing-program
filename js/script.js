const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer); // для тестирования, уберите или закомментируйте в реальной игре
let attempts = 0;
const result = document.getElementById("result");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  let guess = Number(input.value);
  if (isNaN(guess)) {
      result.textContent = "Please enter a valid number";
  } else if (guess < minNum || guess > maxNum) {
      result.textContent = `Please enter a number between ${minNum} and ${maxNum}`;
  } else {
      attempts++;
      if (guess < answer) {
          result.textContent = "TOO LOW! TRY AGAIN!";
      } else if (guess > answer) {
          result.textContent = "TOO HIGH! TRY AGAIN!";
      } else {
          result.textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts`;
          submitBtn.disabled = true;
      }
  }
});