// models/ParkingLot.js
const ParkingLevel = require('./parkingLevel');

class ParkingLot {
    constructor(levels) {
        this.levels = [];

        // Create parking levels
        levels.forEach((levelConfig, index) => {
            this.levels.push(new ParkingLevel(index, levelConfig));
        });
    }

    parkVehicle(vehicle) {
        for (let level of this.levels) {
            if (level.parkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }

    exitVehicle(vehicle) {
        for (let level of this.levels) {
            if (level.exitVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }

    availableSpots() {
        return this.levels.reduce((sum, level) => sum + level.availableSpots(), 0);
    }
}

module.exports = ParkingLot;
