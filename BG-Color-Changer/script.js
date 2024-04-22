const btns = document.querySelectorAll("button");
const body = document.querySelector("body");

let randomColorGenerator = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

function bgColorChanger() {
  body.style.backgroundColor = randomColorGenerator();
}

let stopInterval = setInterval(bgColorChanger, 2000);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "btn1") {
      // Clear the existing interval
      clearInterval(stopInterval);
      // Start a new interval
      stopInterval = setInterval(bgColorChanger, 2000);
    } else {
      // Stop the interval
      clearInterval(stopInterval);
    }
  });
});
