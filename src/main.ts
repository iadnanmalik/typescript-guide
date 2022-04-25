const hello = "hello"
//const becomes a type because of const
let hello_1 =  "world"
//now type of hello_1 is string
//BEST PRACTISE
let hello_2 : string  = "world"

// -----------------------------------------------------------------
//FUNCTIONS
const getFUllName = (name : string,surname : string ) : string => {
    return name + " " + surname;
}

console.log(getFUllName("Good", "Morning"))

// -----------------------------------------------------------------
//OBJECTS
//There is no entity definition in javascript
// : { name: string;  age: number;} --> entity definition
const user : { name: string;  age: number;} = {
    name: "john",
    age: 18
};
const user2 : { name: string;  age: number;} = {
    name:"doe",
    age: 19
};
//entity definitions can be given via interfaces in typescript class
interface User {
 name: string;
 age: number;
}
// To define stuff that is not mandatory in interfaces we can use '?'
interface EzUser {
    name?: string;
    age?: number;
}
const ezUser : EzUser = {
};


// -----------------------------------------------------------------
//FUNCTION IN INTERFACE
//We can add functions in the interfaces too
interface funcUser {
    name?: string;
    age?: number;
    getFUllTest?() : string;
}
var age=10;
const funcUser : funcUser = {
    name:"doe",
    age: 12,
    getFUllTest : function() {
         console.log(this.age)
         return "Returning a string"
    }
};
console.log(funcUser.getFUllTest())
//BEST PRACTISE for defining interfaces,
//We should always define an interface by adding I in start
//E.G IUser, IFuncUser


// -----------------------------------------------------------------
//Union in typescript
let username: string = "name";
let password: string | null = null;
interface IUseru {
    name: string;
    surname: string;
}
let useru: IUseru | null = null;


// -----------------------------------------------------------------
//Type Aliasing
//type aliasing means using the type keyword for aliasing the basic types
type TypeTest = string;
// Void in typescript
// void is a set of undefined and null
const doSomething = () : void => {
    console.log(doSomething);
}
//when we don't return anything typescript returns void from that function


// -----------------------------------------------------------------
//Any in typescript
//The easiest type in typescript


// -----------------------------------------------------------------
//Never in typescript
const doSomethingNever = () : never => {
    throw "never"
}


// -----------------------------------------------------------------
//Unknwon in typescript
let vAny: any = 10;
let vUnknown: unknown = 10;
let teststr: string = vAny
// let teststr1: string = vUnknown -> Error: Type 'unknown' is not assignable to type 'string'.


// -----------------------------------------
//Type Assertion in typescript
//To make unknown to be assigned to type 'string'
let teststr1: string = vUnknown as string
let pagNum : string = "1";
// let numericPagNum : number  = pagNum as number;
// -> Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.ts(2352)
let numericPagNum : number  = (pagNum as unknown) as number;


// -----------------------------------------------------------------
//TypeScript working with dom examples
const someElem  = document.querySelector('.foo')
// console.log(someElem.value) // Error value doesnt eist on someElem
const someElem1 = document.querySelector(".foo") as HTMLInputElement
console.log(someElem1.value)
//Works fine
someElem1.addEventListener("blur", (e) => {
    // console.log(e.target.value) // Error value doesnt eist on someElem1
})
someElem1.addEventListener("blur", (e) => {
    const target = e.target as HTMLInputElement
    console.log(target.value) 
})


// -----------------------------------------------------------------
// Classes in typescript
// Classes have three keywords in ts. Public, Private and Protected.
// Everything is public by default.

class User {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFUllName() : string{
        return this.firstName + ' ' + this.lastName;
    }
}
//None of the checks for public private or protected exist in Javascript so when typescript is transpiled
//none of these matter. 
//static properties can be made in class and are only accessible inside the class not on instances


// -----------------------------------------------------------------
//Inheritance in ts
class Admin extends User {
    private editor: string
    setEditor(editor: string) : void {
       this.editor = editor;
    }
}
//With these lines everything in User becomes accesible by admin
const admin1= new Admin("john","doe")
console.log(admin1.getFUllName())


// -----------------------------------------------------------------
//Generics in ts
const addId = <T>(obj : T)  => {
    const id = '22111';
    return {
        ...obj,
        id
    }
}
const testuser = {
    name : "john"
}
const result = addId(testuser)
//Now we can see that if we hover over addId it shows that the type of
//generic is { name : string }
//Lets add interface to it

interface ITestUser{
    name: string;
}
const result1 = addId<ITestUser>(testuser)
//Although it means totally the same as above but this is more clear way for reading

//Lets tweak the function
const addIdExp = <T extends object>(obj : T)  => {
    const id = '22111';
    return {
        ...obj,
        id
    }
}
//Now we have made sure that the input in the generic will always be an object
// const result2= addIdExp("john") -> Error
const result2 = addIdExp<ITestUser>(testuser)


// -----------------------------------------------------------------
//Generic for Inerfaces
interface genUser<T> {
    name: string
    data: T
}

let genUser : genUser<{age : number}> = {
    name : "john",
    data : { age: 10 }
}

// -----------------------------------------------------------------
//Enums in typescript
// It does not have an initializer and the preceding enum member was a numeric constant. In this case the value of the current enum member will be the value of the preceding enum member plus one.
// All enum members in 'E1' and 'E2' are constant.
 
enum E1 {
  X,
  Y,
  Z,
}
 
enum E2 {
  A = 1,
  B,
  C,
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    //kind: ShapeKind.Square,
    //Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    kind: ShapeKind.Circle,
    radius: 100,
};