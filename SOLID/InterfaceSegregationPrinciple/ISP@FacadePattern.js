//  Exercise: Facade Pattern
// Scenario: You’re building a smart home system that involves various complex subsystems (e.g., lights, thermostat, and security). The client wants to control all these systems but doesn’t need to interact with each subsystem's full complexity. You need to provide a simplified interface so the client can control the essential features of the smart home system without interacting with unnecessary functionality.



// Task:
// Create classes Light, Thermostat, and SecuritySystem, each with multiple methods (e.g., turnOn(), setTemperature(), arm()).
// Implement a SmartHomeFacade class that provides simplified methods such as activateAllSystems() and deactivateAllSystems().
// Ensure that the client interacts only with the SmartHomeFacade class, without knowing the details of the subsystems.




// Subsystem: Light
class Light {
    turnOn() {
        console.log("Lights are turned on");
    }

    turnOff() {
        console.log("Lights are turned off");
    }
}

// Subsystem: Thermostat
class Thermostat {
    setTemperature(temp) {
        console.log(`Thermostat set to ${temp} degrees`);
    }
}

// Subsystem: Security System
class SecuritySystem {
    arm() {
        console.log("Security system armed");
    }

    disarm() {
        console.log("Security system disarmed");
    }
}

// Facade class that simplifies interaction with the subsystems
class SmartHomeFacade {
    constructor(light, thermostat, securitySystem) {
        this.light = light;
        this.thermostat = thermostat;
        this.securitySystem = securitySystem;
    }

    activateAllSystems() {
        console.log("Activating all systems...");
        this.light.turnOn();
        this.thermostat.setTemperature(22);
        this.securitySystem.arm();
    }

    deactivateAllSystems() {
        console.log("Deactivating all systems...");
        this.light.turnOff();
        this.securitySystem.disarm();
    }
}

// Client code
let light = new Light();
let thermostat = new Thermostat();
let securitySystem = new SecuritySystem();
let smartHome = new SmartHomeFacade(light, thermostat, securitySystem);

// Simplified interface for the client
smartHome.activateAllSystems();  // Output: Activating all systems... (lights, thermostat, security)
smartHome.deactivateAllSystems();  // Output: Deactivating all systems...
