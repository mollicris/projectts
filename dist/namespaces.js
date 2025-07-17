var DataBaseEntity;
(function (DataBaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DataBaseEntity.User = User;
    var myUser = new User("Cris");
    console.log(myUser);
})(DataBaseEntity || (DataBaseEntity = {}));
var muOtherUser = new DataBaseEntity.User("Julian");
console.log(muOtherUser);
/// <reference path="namespace.ts"/>
var myOtherUser = new DataBaseEntity.User("Julian");
console.log(myOtherUser);
