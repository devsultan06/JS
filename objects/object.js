
let details = {
    name: "Sultan",
    age: 18,
    school: "UI",
    food: "Rice",
    fullname: function () {
        return this.name + " " + this.food
    }
}

const info = [
    {
        name: "Oba",
        lvl : 100
    },
    {
        name: "Sultan",
        lvl: 500
    }
]


console.log(details);

console.log(details.name);

console.log(details.food);

console.log(details.fullname());

console.log(info[0].lvl);

console.log(info[1].name);