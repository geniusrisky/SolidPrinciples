//const parkingLot = require('../models/parkingLot')

// patterns/Strategy.js
class ParkingStrategy {
    park(vehicle, parkingLot) {
        return parkingLot.parkVehicle(vehicle);
    }
}

module.exports = ParkingStrategy;
