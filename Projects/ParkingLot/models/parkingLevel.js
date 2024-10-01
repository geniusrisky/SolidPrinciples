// models/ParkingLevel.js
const ParkingSpot = require('./parkingSpot');

class ParkingLevel {
    constructor(level, numSpots) {
        this.level = level;
        this.spots = [];

        for (let i = 0; i < numSpots.small; i++) {
            this.spots.push(new ParkingSpot('small'));
        }
        for (let i = 0; i < numSpots.medium; i++) {
            this.spots.push(new ParkingSpot('medium'));
        }
        for (let i = 0; i < numSpots.large; i++) {
            this.spots.push(new ParkingSpot('large'));
        }
    }

    parkVehicle(vehicle) {
        for (let spot of this.spots) {
            if (spot.park(vehicle)) {
                return true;
            }
        }
        return false;
    }

    exitVehicle(vehicle) {
        for (let spot of this.spots) {
            if (spot.vehicle === vehicle) {
                spot.exit();
                return true;
            }
        }
        return false;
    }

    availableSpots() {
        return this.spots.filter(spot => spot.isAvailable).length;
    }
}

module.exports = ParkingLevel;
