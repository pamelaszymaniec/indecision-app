// arguments objects  - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1));

//this keyword - no longer bound

const user = {
    name: 'Pamela',
    cities: ['Gdansk', 'Krakow', 'Warszawa'],
    printPlacesLived() {
    return this.cities.map((city)=> this.name + ' has lives in '  + city + '!');



    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) =>
            this.multiplyBy*number
        );

    }
};

console.log(multiplier.multiply());