// Scenario: Vehicles

// You’re designing a system for different types of vehicles. We want to include:

//     A Car
//     A Bike
//     A Boat

// Each of these vehicles can have certain features, such as:

//     Engine (Only Car and Boat will have engines, but not Bike).
//     Wheels (Both Car and Bike have wheels, but not Boat).
//     Seats (All vehicles have seats, but in varying numbers).

// Design Exercise:

//     Inheritance Approach:
//         Create a base class Vehicle with properties like seats.
//         Subclasses Car, Bike, and Boat inherit from Vehicle.
//         Each subclass should have specific behaviors or properties (e.g., Car has wheels, Boat has an engine).Scenario: Vehicles

// You’re designing a system for different types of vehicles. We want to include:

//     A Car
//     A Bike
//     A Boat

// Each of these vehicles can have certain features, such as:

//     Engine (Only Car and Boat will have engines, but not Bike).
//     Wheels (Both Car and Bike have wheels, but not Boat).
//     Seats (All vehicles have seats, but in varying numbers).

// Design Exercise:

//     Inheritance Approach:
//         Create a base class Vehicle with properties like seats.
//         Subclasses Car, Bike, and Boat inherit from Vehicle.
//         Each subclass should have specific behaviors or properties (e.g., Car has wheels, Boat has an engine).

class Vehicle{

    constructor(name, engine, wheels, seats){
        this.name = name;
        this.engine =engine;
        this.seats =  seats;
        this.wheels= wheels;
    }

    callVehicle(){
        console.log(`${this.name} ${this.engine ? this.engine : ""}  is starting`);

    }

}

class Boat extends Vehicle{

    // startBoat(){
    //     console.log(`${this.name} engine is starting`);
    // }
}
let boat = new Boat("Titanic", "Engine")
boat.callVehicle()

class Car extends Vehicle{

   
}

class Car extends Vehicle{

    
}