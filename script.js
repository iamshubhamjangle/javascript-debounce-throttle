/**
 * Debounce: Trigger the function when user stops typing
 * Use `setTimeout()` to call function with a delay, If timer already exist clear is and countdown again.
 */
const inputBox = document.getElementById("input");
const apiTextView = document.getElementById("debounceText");

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function handleOnChange() {
  const inputText = inputBox.value;
  apiTextView.textContent = inputText;
}

inputBox.addEventListener("input", debounce(handleOnChange, 500));

/**
 * Throttling: In Game user presses the fire button continously,
 * But, we need to throttle it so it can be only called with a delay
 */
const throttleCount = document.getElementById("throttleCount");
const fireButton = document.getElementById("fireButton");

function throttle(fn, delay) {
  let wait = false; // init we dont have to wait
  return (...args) => {
    if (!wait) {
      fn(...args); // if we dont have to wait come here
      wait = true; // execute the fn and wait until delay
      setTimeout(() => {
        wait = false;
      }, 1000);
    }
  };
}

function handleClick() {
  let count = parseInt(throttleCount.innerHTML, 10);
  throttleCount.innerHTML = count + 1;
}

fireButton.addEventListener("click", throttle(handleClick, 1000));
