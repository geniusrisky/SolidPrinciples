// patterns/Singleton.js
const ParkingLot = require('../models/parkingLot');

class ParkingLotSingleton {
    constructor() {
        if (!ParkingLotSingleton.instance) {
            ParkingLotSingleton.instance = new ParkingLot([
                { small: 5, medium: 10, large: 2 },
                { small: 10, medium: 15, large: 5 },
            ]);
        }
    }

    getInstance() {
        return ParkingLotSingleton.instance;
    }
}

module.exports = new ParkingLotSingleton();
