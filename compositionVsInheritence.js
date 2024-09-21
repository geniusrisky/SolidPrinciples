// Engine class
class Engine {
    start() {
        console.log('Engine is starting...');
    }
}

// Car class
class Car {
    constructor() {
        this.engine = new Engine();  // Composition: Car "has-a" Engine
    }

    startCar() {
        this.engine.start();  // Delegates the action to the engine
        console.log('Car is starting...');
    }
}

const myCar = new Car();
//myCar.startCar();


// Exercise 4: Practice Composition and Inheritance

// Scenario 1: Inheritance
// Create a class Employee that has properties like name and salary. Then, create two subclasses:

//     Manager (inherits from Employee) – can manage a team.
//     Developer (inherits from Employee) – can write code.

// Each subclass should have its own method (manageTeam() for Manager and writeCode() for Developer), along with the inherited properties from Employee.

class Employee {
    constructor(name, salary){

        this.name = name;
        this.salary = salary;
    }
    

}

class Manager extends Employee{
        
    manageTeam(){
        console.log(`${this.name} managing team`)
    }

}
class Developer extends Employee{
        
    writeCode(){
        console.log(`${this.name} is wriring code`)
    }

}

let developer = new Developer("AKash");
developer.writeCode();

// Create a class House that has components like Kitchen, LivingRoom, and Bedroom. The House class will compose these objects and provide methods like cleanHouse(),
//  which will call specific methods in the composed objects (e.g., cleanKitchen() from Kitchen).

// composition 

class House{
    constructor(kitchen, livingROom, bedroom){
        this.kitchen = kitchen;
        this.livingROom  =livingROom ;
        this.bedroom = bedroom;
    }
    cleanHouse(Option){
        console.log(`do ${this.option} clean`)
    }


}
class CleanKitchen{

    constructor(){
        this.house = new House()
    }
    cleanKitchen(){
        this.house.cleanHouse(this.kitchen)
    }
}

let kitchen = new CleanKitchen();
kitchen.cleanKitchen()