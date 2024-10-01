// models/ParkingSpot.js
class ParkingSpot {
    constructor(size) {
        this.size = size; // small, medium, large
        this.isAvailable = true; 
        this.vehicle = null; 
    }

    park(vehicle) {
        if (this.isAvailable && this.canFitVehicle(vehicle)) {
            this.isAvailable = false;
            this.vehicle = vehicle;
            return true;
        }
        return false;
    }

    exit() {
        this.isAvailable = true;
        this.vehicle = null;
    }

    canFitVehicle(vehicle) {
        return this.size >= vehicle.getSize(); // Ensures size compatibility
    }

    getSize() {
        return this.size;
    }

    isOccupied() {
        return !this.isAvailable;
    }
}

module.exports = ParkingSpot;
