/*1.  Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' 
child class of the 'CarCl' class  */
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
}

class EVCl extends CarCl {
    /*2.  Make the 'charge' property private  */
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    /*3.  Implement the ability to chain the 'accelerate' and 'chargeBattery' 
methods of this class, and also update the 'brake' method in the 'CarCl' 
class. Then experiment with chaining!  */
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} battery charged to ${this.#charge}%`);
        return this;
    }

    accelerate() {
        if (this.#charge <= 0) {
            console.log(`${this.make} has no charge left!`);
            return this;
        }
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}
/* Data car 1: 'Rivian' going at 120 km/h, with a charge of 23% */
const rivian = new EVCl('Rivian', 120, 23);
rivian
    .accelerate()       
    .accelerate()       
    .brake()            
    .chargeBattery(90)  
    .accelerate();      

