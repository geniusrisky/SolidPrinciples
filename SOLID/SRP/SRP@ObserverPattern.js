
// Observer Pattern
// Explanation: The Observer pattern allows a subject to notify multiple observers about changes without the subject being responsible for the actions taken by the observers. 
// This helps in maintaining SRP because the subject only focuses on its own state management.

// Why It's Used with SRP:

// Loose Coupling: The subject doesn’t have to take on the responsibility of knowing what to do with the changes it reports. 
// Instead, each observer handles its own response.
// Separation of Responsibilities: The subject class is only responsible for notifying observers of a change, while the observers are responsible for acting on that change.
// Real-world Example:

// A Stock class that manages stock prices can notify Investor classes when the stock price changes. 
// The Stock class adheres to SRP by only managing stock prices, while each Investor reacts in its own way (e.g., buy or sell).
// Exercise:

// Create a WeatherStation class that tracks temperature.
// Use the Observer pattern to notify WeatherApp and NewsAgency classes whenever the temperature changes.
// Ensure the WeatherStation class does not handle how the observers react.


// Observer Interface
class Observer {
  update(temperature) {
    throw new Error("Observer's update method should be implemented.");
  }
}

// Subject (WeatherStation)
class WeatherStation {
  constructor() {
    this.observers = [];
    this.temperature = null;
  }

  // Add an observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remove an observer
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notify all observers
  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  // Set a new temperature and notify observers
  setTemperature(newTemperature) {
    console.log(`WeatherStation: New temperature set to ${newTemperature}°C.`);
    this.temperature = newTemperature;
    this.notifyObservers();
  }
}

// Observer (WeatherApp)
class WeatherApp extends Observer {
  update(temperature) {
    console.log(`WeatherApp: The temperature is now ${temperature}°C.`);
  }
}

// Observer (NewsAgency)
class NewsAgency extends Observer {
  update(temperature) {
    console.log(`NewsAgency: Breaking News! Current temperature is ${temperature}°C.`);
  }
}

// Client code

const weatherStation = new WeatherStation();

const weatherApp = new WeatherApp();
const newsAgency = new NewsAgency();

// Adding observers to the weather station
weatherStation.addObserver(weatherApp);
weatherStation.addObserver(newsAgency);

// Simulating temperature changes
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);

// Removing one observer
weatherStation.removeObserver(newsAgency);

// Simulating another temperature change
weatherStation.setTemperature(20);
