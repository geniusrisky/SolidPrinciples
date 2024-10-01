// Command Pattern Overview:

// The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This pattern allows you to parameterize methods with different requests, delay or queue requests, and support undoable operations.
// Key Components:

//     Command Interface: Declares an interface for executing operations.
//     Concrete Commands: Implements the command interface, binding a receiver to a specific action.
//     Receiver: The class that performs the actual operation.
//     Invoker: Responsible for executing commands.
//     Client: Creates and configures the ConcreteCommand objects.

// Example: A Simple Remote Control

// Let's simulate a remote control that can turn lights on and off using the Command Pattern



//command interface

class Command {
    execute() {
        throw new Error('This method should be overridden!');
    }

    undo() {
        throw new Error('This method should be overridden!');
    }
}


//Step 2: Concrete Command for Turning On the Light

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }

    undo() {
        this.light.turnOff();
    }
}


//Step 3: Concrete Command for Turning Off the Light

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }
}


//Step 4: Receiver (Light)

class Light {
    turnOn() {
        console.log("The light is on");
    }

    turnOff() {
        console.log("The light is off");
    }
}



//Step 5: Invoker (Remote Control)

class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}


//Step 6: Client Code

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

// Turn the light on
remote.setCommand(lightOn);
remote.pressButton();  // Output: The light is on

// Turn the light off
remote.setCommand(lightOff);
remote.pressButton();  // Output: The light is off

// Undo the previous action (turn the light back on)
remote.pressUndo();  // Output: The light is on



// Key Points:

//     Command Interface: The Command interface defines the execute and undo methods.
//     Concrete Command Classes: These implement the Command interface and bind a receiver (like the Light class) to a specific action.
//     Invoker: In this case, the RemoteControl is the invoker that triggers the execution of commands.
//     Receiver: The Light class is the receiver that performs the actual operation.

// Exercise:

//     Add more devices to the remote control, such as a TV or fan. Implement commands to turn these devices on and off.
//     Implement a command history that allows undoing multiple actions.
//     Add more operations, like increasing or decreasing the light intensity or changing TV channels.