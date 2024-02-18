let details = {
  name: "Sultan",
  age: 18,
  school: "UI",
  food: "Rice",
  fullname: function () {
    return this.name + " " + this.food;
  },
};

const info = [
  {
    name: "Oba",
    lvl: 100,
  },
  {
    name: "Sultan",
    lvl: 500,
  },
];

let school = {
  name: "Vivekananda School",
  location: "Delhi",
  established: "1971",
  engine: {
    name: "Camry",
    age: 30,
  },
  numbers: [1, 3, 6],
  displayInfo: function () {
    console.log(
      `${this.name} was established in ${this.established} at ${this.location}`
    );
  },
};

const car = [
  [1,2],
  [5,6]
]

console.log(car[1][1]);

console.log(details);

console.log(details.name);

console.log(details.food);

console.log(details.fullname());

console.log(info[0].lvl);

console.log(info[1].name);

console.log(school.displayInfo());

console.log(school.engine.name);

console.log(school.numbers[2]);
