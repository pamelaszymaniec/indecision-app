
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi! I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let descripiton = super.getDescription();
        if (this.hasMajor()) {
            descripiton += ` Their major is ${this.major}.`;
        }
        return descripiton
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name);
        this.location = location;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            greeting += ` I'm visiting from ${this.location}.`;
        }
        return greeting;
    }

}
const me = new Traveler('Pamela Szymaniec', 25, 'Gdańsk');
console.log(me.getGreeting());
const other = new Traveler();
console.log(other.getGreeting());