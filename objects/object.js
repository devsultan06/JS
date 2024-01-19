
let details = {
    name: "Sultan",
    age: 17,
    school: "UI",
    food: "Rice",
    fullname: function () {
        return this.name + " " + this.food
    }
}


console.log(details);

console.log(details.name);

console.log(details.food);

console.log(details.fullname());