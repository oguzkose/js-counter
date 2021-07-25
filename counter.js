let counter = 0;
let counterBox = document.querySelector("#counter");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");

increase.addEventListener("click", clickEvent);
decrease.addEventListener("click", clickEvent);

function clickEvent() {

  this.id == "increase" ? (counter += 1) : (counter -= 1);
  counterBox.innerHTML = counter;
}
