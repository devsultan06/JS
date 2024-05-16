const food = ["Rice", "Bean", "Eba"];

food[2] = "Amala";

food[3] = "Corn";

food.push("Garri");

console.log(food);

console.log(typeof food);

console.log(food.length);

console.log(food.toString());

console.log(food.join(" * "));

const nos = [3, 6, 8];

const hun = nos.map((lol) => {
  return lol * 2;
});

console.log(hun);

const newArray = [];

const result = nos.forEach((no) => {
  if (no > 3) {
    newArray.push(no);
  }
});

const me = nos.filter((hell) => {
  return hell > 3;
});

console.log(me);

const total = nos.reduce((x, y) => {
  return x + y;
});

console.log(total);

const nums = [2, 3, 0, 5, 9, 10, 2];

const sort = nums.sort((a, b) => {
  return a - b;
});

console.log(sort);
