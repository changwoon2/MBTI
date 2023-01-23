const objectData = {
  key: "value",
  name: "changwoon",
  age: 85,
  email: "changwoon4@naver.com",
};

console.log(objectData["age"]);

const arrayData = [9, 8, 7, 6];
console.log(arrayData[0]);
console.log(arrayData[1]);
console.log(arrayData[2]);

let number = 123;
console.log(number);

number = 456;
console.log(number);

function hello(name) {
  if (name.length > 5) {
    return;
  }
  const message = `hello ` + name + "!";
  console.log(message);
}
hello("world");
hello("neo");
hello("hero");

const itemEls = document.querySelectorAll(".item");
const btnEl = document.querySelector(".btn");
const colors = ["green", "orange", "tomato"];

btnEl.addEventListener("click", function () {
  itemEls.forEach(function (itemEl, index) {
    console.log(index, itemEl);
    itemEl.style.backgroundColor = colors[index];
  });
  btnEl.innerHTML = `<span>click</span>`;
});
