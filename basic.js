class Rectangle {
    /// setup
    constructor(color, width, height){
        console.log("the rectangle is being created")
        this.color = color;
        this.width = width;
        this.height = height
    }

    getArea () {
        return this.width * this.height
    }
}

const myRectangle = new Rectangle("blue", 3, 5)

console.log(myRectangle.getArea())

class Square {
    constructor(_width){
        this.height = _width;
        this.width = _width
    }

    get area() {
        return this.width * this.height
    }

     set area (area) {
        this.width = Math.sqrt(areaa)
        this.height = this.width
     }
}

let square = new Square(4)
console.log(square.area)


// static method aare hhelper methods

class Square1 {
    constructor(_width)
    {
        this.width = _width
        this.height = this.width
    }

    static equals (a, b) {
        return (a.width*a.height == b.width * b.height )
    }

    static isValidDimensions(wi, he) {
        return wi === he
    }
}

let square1 = new Square1(3)
let square2 = new Square1(4)
console.log(square1);
console.log("static:", Square1.isValidDimensions(6, 6))

console.log(Square1.equals(square1, square2)) // static properties cannot be directly accessed om instances of the clas, isntead the are accessed on the class itself

// inheritance and extends 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    describe() {
        console.log("I am normal person");
    }
}

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Programmer extends Person1 {
    constructor(name, age, yearsOfEx) {
        super(name, age);

        // custom behavior
        this.experience = yearsOfEx;
    }

    code() {
        console.log("I am coding");
    }
}

function developSoftware(programmers) {
    // develop software
    for (let prog of programmers) {
        prog.code();
    }
}

let person1 = new Person("Gef", 56);
let programmer1 = new Programmer("Don", 45, 10);

console.log(person1.describe());
console.log(programmer1.code());
console.log(programmer1.describe());

const programmers = [
    new Programmer("Daniel", 65, 76),
    new Programmer("Danieel", 635, 763),
];

developSoftware(programmers);


// polymorphism 

class Animal {
    constructor(name) {
        this.name = name 
    }

    makeSounds () {
        console.log("Generic animal sound!");
    }


}

class Dog extends Animal{
    constructor (name) {
        super(name)
    }

    makeSounds() {
        super.makeSounds()
        console.log("Woof");
    }
}

const a1 = new Animal("Dom")

const a2 = new Dog("a")

a2.makeSounds()

a1.makeSounds()