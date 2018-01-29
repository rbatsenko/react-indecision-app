
const add = (a, b) => {
    return a + b;
}
console.log(add(55, 1));

const user = {
    name: 'Roman',
    cities: ['Krakow', 'Wroclaw'],
    printPlacesLived() {
        return this.cities.map( (city) => this.name + ' has lived in ' + city + '!')
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number )
    }
}

console.log(multiplier.multiply());