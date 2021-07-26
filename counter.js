let counter = localStorage.getItem("counter")
  ? Number(localStorage.getItem("counter"))
  : 0;

let counterBox = document.querySelector("#counter");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

counterBox.innerHTML = counter;

increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);

function clickEvent() {
  this.id == "increase" ? (counter += 1) : (counter -= 1);
  localStorage.setItem("counter", counter);
  counterBox.innerHTML = counter;
}
