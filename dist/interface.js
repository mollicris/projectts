var _a;
var person1 = {
    name: "Kevin",
    code: "01",
    charge: 1,
    description: "hola",
    sayHello: function () { return "hola"; }
};
person1.code = "50";
var otherPerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () {
        console.log("Hola2");
        var persons = [0, 1, 2, 3, 4];
        persons.map(function (p) { return p.toFixed(1); });
        return "";
    }
};
(_a = otherPerson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
