// models/Vehicle.js
class Vehicle {
    constructor(type, size) {
        this.type = type; // e.g., car, motorcycle, truck
        this.size = size; // e.g., small, medium, large
    }

    getType() {
        return this.type;
    }

    getSize() {
        return this.size;
    }
}

module.exports = Vehicle;
