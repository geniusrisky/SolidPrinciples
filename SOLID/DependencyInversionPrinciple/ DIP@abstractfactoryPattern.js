// Scenario: You are tasked with developing a logging system where the application can choose between different logging mechanisms (e.g., logging to the console or logging to a file). Your high-level class (e.g., Application) should not depend directly on any specific logging implementation.
// Task:

//     Create a Logger interface with a method log(message).
//     Implement two classes: ConsoleLogger (logs to the console) and FileLogger (simulates logging to a file).
//     Use Dependency Injection to inject the appropriate logger into the Application class.
//     Ensure that Application depends on the Logger interface (abstraction) and not on the concrete logger classes.

// Logger Interface (Abstraction)
class Logger {
  log(message) {
    throw new Error("log() must be implemented");
  }
}

// Console Logger (Concrete Implementation)
class ConsoleLogger extends Logger {
  log(message) {
    console.log(`Logging to console: ${message}`);
  }
}

// File Logger (Concrete Implementation)
class FileLogger extends Logger {
  log(message) {
    console.log(`Logging to file: ${message}`);
  }
}

// Application class (High-level module)
class Application {
  constructor(logger) {
    this.logger = logger; // Inject the logger (Dependency Injection)
  }

  run() {
    this.logger.log("Application is running!");
  }
}

// Usage:

// Inject ConsoleLogger
const consoleLogger = new ConsoleLogger();
const app1 = new Application(consoleLogger);
app1.run(); // Output: Logging to console: Application is running!

// Inject FileLogger
const fileLogger = new FileLogger();
const app2 = new Application(fileLogger);
app2.run(); // Output: Logging to file: Application is running!




// 2. Exercise: Abstract Factory Pattern

// Scenario: You're building a cross-platform UI system that can create buttons and text fields for different operating systems (Windows and macOS). The client should not depend on specific button or text field implementations. Instead, it should depend on abstractions provided by an abstract factory.
// Task:

//     Create abstract classes Button and TextField.
//     Implement concrete classes WindowsButton and MacButton, as well as WindowsTextField and MacTextField.
//     Create an AbstractFactory interface that defines methods to create buttons and text fields.
//     Implement WindowsFactory and MacFactory that create Windows and Mac UI components, respectively.
//     Ensure that the client code only depends on the AbstractFactory interface.



// Button abstraction
class Button {
    render() {
        throw new Error("render() must be implemented");
    }
}

// TextField abstraction
class TextField {
    render() {
        throw new Error("render() must be implemented");
    }
}

// Windows Button (Concrete Implementation)
class WindowsButton extends Button {
    render() {
        console.log("Rendering Windows Button");
    }
}

// Mac Button (Concrete Implementation)
class MacButton extends Button {
    render() {
        console.log("Rendering Mac Button");
    }
}

// Windows TextField (Concrete Implementation)
class WindowsTextField extends TextField {
    render() {
        console.log("Rendering Windows TextField");
    }
}

// Mac TextField (Concrete Implementation)
class MacTextField extends TextField {
    render() {
        console.log("Rendering Mac TextField");
    }
}

// AbstractFactory Interface (Abstraction)
class AbstractFactory {
    createButton() {
        throw new Error("createButton() must be implemented");
    }

    createTextField() {
        throw new Error("createTextField() must be implemented");
    }
}

// WindowsFactory (Concrete Factory)
class WindowsFactory extends AbstractFactory {
    createButton() {
        return new WindowsButton();
    }

    createTextField() {
        return new WindowsTextField();
    }
}

// MacFactory (Concrete Factory)
class MacFactory extends AbstractFactory {
    createButton() {
        return new MacButton();
    }

    createTextField() {
        return new MacTextField();
    }
}

// Client Code
function renderUI(factory) {
    const button = factory.createButton();
    const textField = factory.createTextField();

    button.render();  // Render the button
    textField.render();  // Render the text field
}

// Usage:
const windowsFactory = new WindowsFactory();
renderUI(windowsFactory);  // Output: Rendering Windows Button, Rendering Windows TextField

const macFactory = new MacFactory();
renderUI(macFactory);  // Output: Rendering Mac Button, Rendering Mac TextField
