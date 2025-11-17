// let carName = "BMW";


// let car = {
//     carName: "Honda",
//     color: "Black"
// }

// car.carName = "Toyota";

// Inheritence
// Polymorphism
// Encapsulation

class Car {
    constructor (carName, color) {
        this.carName = carName;
        this.color = color;
    }
    #price = "2000000"
    
    getPrice () {
        console.log(`price is: ${this.#price}`)
    }

    start () {
        console.log("engine started with noise!");
    }
}

class ElectricVehicle extends Car {
    constructor (carName, color, keyLessEntry) {
        super (carName, color)
        this.keyLessEntry = keyLessEntry; 
    }

    start () {
        console.log("Engine Started Silently!");
    }
}

let tesla = new ElectricVehicle("Tesla", "Gray", true);

let honda = new Car("Honda", "Black");
let toyota = new Car("Toyota", "White");

// tesla.start()
// honda.start()
console.log(honda.getPrice());
console.log(honda.price);

