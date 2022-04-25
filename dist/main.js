var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "hello";
//const becomes a type because of const
var hello_1 = "world";
//now type of hello_1 is string
//BEST PRACTISE
var hello_2 = "world";
//FUNCTIONS
var getFUllName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFUllName("Good", "Morning"));
//CREATE OBJECTS
//There is no entity definition in javascript
// : { name: string;  age: number;} --> entity definition
var user = {
    name: "adnan",
    age: 18
};
var user2 = {
    name: "ahmad",
    age: 19
};
var ezUser = {};
var age = 10;
var funcUser = {
    name: "ahmad",
    age: 12,
    getFUllTest: function () {
        console.log(this.age);
        return "Returning a string";
    }
};
console.log(funcUser.getFUllTest());
//BEST PRACTISE for defining interfaces,
//We should always define an interface by adding I in start
//E.G IUser, IFuncUser
//Union in typescript
var username = "name";
var password = null;
var useru = null;
// Void in typescript
// void is a set of undefined and null
var doSomething = function () {
    console.log(doSomething);
};
//when we don't return anything typescript returns void from that function
//Any in typescript
//The easiest type in typescript
//Never in typescript
var doSomethingNever = function () {
    throw "never";
};
//Unknwon in typescript
var vAny = 10;
var vUnknown = 10;
var teststr = vAny;
// let teststr1: string = vUnknown -> Error: Type 'unknown' is not assignable to type 'string'.
// -----------------------------------------
//Type Assertion in typescript
//To make unknown to be assigned to type 'string'
var teststr1 = vUnknown;
var pagNum = "1";
// let numericPagNum : number  = pagNum as number;
// -> Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
var numericPagNum = pagNum;
//TypeScript working with dom examples
var someElem = document.querySelector('.foo');
// console.log(someElem.value) // Error value doesnt eist on someElem
var someElem1 = document.querySelector(".foo");
console.log(someElem1.value);
//Works fine
someElem1.addEventListener("blur", function (e) {
    // console.log(e.target.value) // Error value doesnt eist on someElem1
});
someElem1.addEventListener("blur", function (e) {
    var target = e.target;
    console.log(target.value);
});
// Classes in typescript
// Classes have three keywords in ts. Public, Private and Protected.
// Everything is public by default.
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFUllName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return User;
}());
//None of the checks for public private or protected exist in Javascript so when typescript is transpiled
//none of these matter. 
//static properties can be made in class and are only accessible inside the class not on instances
//Inheritance in ts
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    return Admin;
}(User));
//With this single line everything in User becomes accesible by admin
var admin1 = new Admin("Adnan", "Ahmad");
console.log(admin1.getFUllName());
//Generics in ts
var addId = function (obj) {
    var id = '22111';
    return __assign(__assign({}, obj), { id: id });
};
var testuser = {
    name: "Adnan"
};
var result = addId(testuser);
var result1 = addId(testuser);
//Although it means totally the same as above but this is more clear way for reading
//Lets tweak the function
var addIdExp = function (obj) {
    var id = '22111';
    return __assign(__assign({}, obj), { id: id });
};
//Now we have made sure that the input in the generic will always be an object
// const result2= addIdExp("adnan") -> Error
var result2 = addIdExp(testuser);
var genUser = {
    name: "adnan",
    data: { age: 10 }
};
//Enums in typescript
// It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.
// All enum members in 'E1' and 'E2' are constant.
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    //kind: ShapeKind.Square,
    //Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    kind: ShapeKind.Circle,
    radius: 100
};
