
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
    
}

const cars = ["A", "B", "C"]

for (const x in cars) {
    console.log(cars[x]);
}

let details = {
  name: "Sultan",
  age: 17,
  school: "UI",
  food: "Rice",
  fullname: function () {
    return this.name + " " + this.food;
  },
};

for (const y in details) {
    console.log(details[y]);
}

const lang = "Jav"

for (const z of lang) {
    console.log(z);
    
}

const car = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;

while (i< car.length) {
    console.log(car[i]);
    i++
}

for (let index = 0; index < 5; index++) {
    if (index === 3) {
        break
    }
    console.log(index);
    
}

for (let index = 0; index < 5; index++) {
  if (index === 3) {
    continue
  }
  console.log(index);
}

const food = ["M", "n", "o"]

for (const j of food) {
    console.log(j);
}