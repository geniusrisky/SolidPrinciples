// patterns/Factory.js
const Vehicle = require('../models/vehicle');

class VehicleFactory {
    static createVehicle(type) {
        switch (type) {
            case 'car':
                return new Vehicle('car', 'medium');
            case 'motorcycle':
                return new Vehicle('motorcycle', 'small');
            case 'truck':
                return new Vehicle('truck', 'large');
            default:
                throw new Error('Unknown vehicle type');
        }
    }
}

module.exports = VehicleFactory;
