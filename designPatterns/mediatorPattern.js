// Mediator Pattern Overview:

// The Mediator pattern is a behavioral design pattern that reduces dependencies between communicating objects by centralizing their communication logic within a mediator. Instead of objects referring to and interacting with each other directly, they communicate through a mediator, promoting loose coupling and better scalability.
// Key Points:

//     Centralized Communication: All communication between components goes through a mediator.
//     Loose Coupling: Reduces dependencies between components, as they no longer need to know about each other directly.
//     Flexibility: Makes it easier to change communication behavior without affecting individual components.

// Example: Mediator Pattern

// Let’s consider an example of an air traffic control system. Each aircraft needs to communicate with air traffic control (the mediator) rather than with each other directly, ensuring that no two aircraft collide.

// Mediator Interface
class AirTrafficControl {
  notify(sender, event) {
    throw new Error("Method not implemented.");
  }
}

// Concrete Mediator
class ATCMediator extends AirTrafficControl {
  constructor() {
    super();
    this.aircrafts = []; // List of registered aircraft
  }

  registerAircraft(aircraft) {
    this.aircrafts.push(aircraft);
    aircraft.setMediator(this);
  }

  notify(sender, event) {
    if (event === "takeoff") {
      this.aircrafts.forEach((aircraft) => {
        if (aircraft !== sender) {
          aircraft.receive(`Aircraft ${sender.name} is taking off.`);
        }
      });
    } else if (event === "landing") {
      this.aircrafts.forEach((aircraft) => {
        if (aircraft !== sender) {
          aircraft.receive(`Aircraft ${sender.name} is landing.`);
        }
      });
    }
  }
}

// Colleague Interface
class Aircraft {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  takeoff() {
    console.log(`${this.name} is requesting takeoff.`);
    this.mediator.notify(this, "takeoff");
  }

  land() {
    console.log(`${this.name} is requesting landing.`);
    this.mediator.notify(this, "landing");
  }

  receive(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Usage
const atc = new ATCMediator();
const plane1 = new Aircraft("Flight A123");
const plane2 = new Aircraft("Flight B456");

atc.registerAircraft(plane1);
atc.registerAircraft(plane2);

plane1.takeoff(); // Notify the mediator about takeoff
plane2.land(); // Notify the mediator about landing






// The Mediator Pattern is a behavioral design pattern that encapsulates how objects (in this case, users) communicate with each other by using a mediator object. Instead of having users directly communicate with one another, they will send their messages to the ChatroomMediator, which will handle broadcasting the messages to all other registered users.
// Key Components:

//     ChatroomMediator: This will act as the mediator between users. It will manage the registration of users and handle broadcasting messages.
//     User: A class that represents a user who can send and receive messages through the mediator.
//     Concrete Mediator: This will be an instance of the ChatroomMediator class, managing the communication between users.

// ChatroomMediator (Mediator)
class ChatroomMediator {
  constructor() {
    this.users = {}; // Keeps track of registered users by their name
  }

  // Method to register a user with the mediator
  register(user) {
    this.users[user.name] = user;
    user.setMediator(this); // Assign the mediator to the user
  }

  // Method to broadcast messages to all users except the sender
  sendMessage(message, fromUser) {
    for (let key in this.users) {
      if (this.users[key] !== fromUser) {
        this.users[key].receive(message, fromUser.name);
      }
    }
  }
}

// User class
class User {
  constructor(name) {
    this.name = name;
    this.mediator = null; // Mediator will be set after registration
  }

  // Set the mediator for this user
  setMediator(mediator) {
    this.mediator = mediator;
  }

  // Send a message through the mediator
  send(message) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  // Receive a message from the mediator
  receive(message, fromUser) {
    console.log(`${this.name} receives message from ${fromUser}: ${message}`);
  }
}

// Usage

// Create the mediator (chatroom)
const chatroom = new ChatroomMediator();

// Create users
const user1 = new User("Alice");
const user2 = new User("Bob");
const user3 = new User("Charlie");

// Register users with the chatroom
chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);

// Users send messages via the mediator (chatroom)
user1.send("Hello everyone!");
user2.send("Hey Alice!");
user3.send("Good morning, Alice and Bob!");








// In a smart home system, different devices (like a thermostat, lights, and security systems) need to communicate and perform coordinated actions. For example, when the security system detects motion, the lights should automatically turn on. This can be efficiently handled using the Mediator Pattern, where the HomeAutomationMediator acts as the central controller for communication between the devices.
// Components of the System:

//     HomeAutomationMediator: The mediator that coordinates actions between various smart devices.
//     SmartDevice: A base class for all smart devices (e.g., lights, thermostat, security system).
//     Specific Devices: Concrete implementations of smart devices like Light, Thermostat, and SecuritySystem.
//     Communication: Devices communicate via the mediator, which determines what actions should be taken based on specific events.

// HomeAutomationMediator (Mediator)
class HomeAutomationMediator {
    constructor() {
        this.devices = {};  // Stores the smart devices
    }

    // Register a device with the mediator
    registerDevice(device) {
        this.devices[device.name] = device;
        device.setMediator(this);  // Associate mediator with the device
    }

    // Method to coordinate actions based on an event
    notify(event, fromDevice) {
        if (event === 'motionDetected' && fromDevice instanceof SecuritySystem) {
            console.log("Motion detected by security system. Turning on the lights.");
            this.devices['light'].turnOn();
        }

        if (event === 'temperatureChange' && fromDevice instanceof Thermostat) {
            const temperature = fromDevice.getTemperature();
            console.log(`Temperature changed to ${temperature}°C.`);
            if (temperature > 25) {
                console.log("It's hot. Turning on the air conditioner.");
                // Assume we have an air conditioner device registered
                this.devices['airConditioner'].turnOn();
            }
        }
    }
}

// Base class for smart devices
class SmartDevice {
    constructor(name) {
        this.name = name;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Simulate sending events to the mediator
    send(event) {
        this.mediator.notify(event, this);
    }
}

// Light device
class Light extends SmartDevice {
    turnOn() {
        console.log(`${this.name} is now ON.`);
    }

    turnOff() {
        console.log(`${this.name} is now OFF.`);
    }
}

// Thermostat device
class Thermostat extends SmartDevice {
    constructor(name) {
        super(name);
        this.temperature = 20;  // Default temperature
    }

    setTemperature(temp) {
        this.temperature = temp;
        this.send('temperatureChange');  // Notify mediator about temperature change
    }

    getTemperature() {
        return this.temperature;
    }
}

// Security system device
class SecuritySystem extends SmartDevice {
    detectMotion() {
        console.log("Motion detected by the security system.");
        this.send('motionDetected');  // Notify mediator about motion detection
    }
}

// Air Conditioner device
class AirConditioner extends SmartDevice {
    turnOn() {
        console.log(`${this.name} is now ON.`);
    }

    turnOff() {
        console.log(`${this.name} is now OFF.`);
    }
}

// Usage

// Create the home automation mediator
const homeMediator = new HomeAutomationMediator();

// Create smart devices
const livingRoomLight = new Light('Living Room Light');
const thermostat = new Thermostat('Thermostat');
const securitySystem = new SecuritySystem('Security System');
const airConditioner = new AirConditioner('Air Conditioner');

// Register devices with the mediator
homeMediator.registerDevice(livingRoomLight);
homeMediator.registerDevice(thermostat);
homeMediator.registerDevice(securitySystem);
homeMediator.registerDevice(airConditioner);

// Simulate events
securitySystem.detectMotion();  // Motion detection should turn on the light
thermostat.setTemperature(30);  // High temperature should turn on the air conditioner
