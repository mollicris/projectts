var Animal = /** @class */ (function () {
    function Animal() {
        this.age = 10;
    }
    Animal.prototype.sayHi = function () {
        console.log("Grr", this.age);
    };
    return Animal;
}());
var myAnimal = new Animal;
myAnimal.sayHi();
