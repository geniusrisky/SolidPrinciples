// index.js
const VehicleFactory = require('./patterns/factoryPattern');
const ParkingLotSingleton = require('./patterns/singleton');
const ParkingStrategy = require('./patterns/strategy');

const parkingLot = ParkingLotSingleton.getInstance();
console.log(parkingLot)
const strategy = new ParkingStrategy();

// Create vehicles
const car = VehicleFactory.createVehicle('car');
const motorcycle = VehicleFactory.createVehicle('motorcycle');
const truck = VehicleFactory.createVehicle('truck');
//console.log(truck.getSize())

// Park vehicles
console.log('Parking a car:', strategy.park(car, parkingLot));
console.log('Parking a motorcycle:', strategy.park(motorcycle, parkingLot));
console.log('Parking a truck:', strategy.park(truck, parkingLot));

// Available spots
console.log('Available spots:', parkingLot.availableSpots());

// Exit a vehicle
console.log('Exiting a car:', parkingLot.exitVehicle(car));
console.log('Available spots after exiting car:', parkingLot.availableSpots());
