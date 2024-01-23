const date = new Date().getHours();

console.log(date);

if (date > 1) {
  console.log("Good Morning");
} else if (date > 12) {
  console.log("Good Evening");
} else {
  console.log("Good Afternoon");
}
