const buttons = document.querySelectorAll(".button");

const button1 = document.getElementById("button1");

const inputs = document.querySelectorAll(".input");

const hello = document.getElementById("hello");

const submit = document.querySelector(".submit");

window.addEventListener("load", () => {
   alert("Welcome")
})

hello.addEventListener("mousedown", () =>{
   hello.style.color = "red"
})

hello.addEventListener("mouseup", () => {
  hello.style.color = "black";
});
button1.addEventListener("click", () => {
  alert("Hello");
  hello.style.color = "red";
});

console.log(buttons);

console.log(button1);

buttons.forEach((btn, e) => {
  btn.addEventListener("click", () => {
    alert("Hello");
  });
});

inputs.forEach((ipt) => {
  ipt.addEventListener("change", () => {
    ipt.value = ipt.value.toUpperCase();
  });
});
