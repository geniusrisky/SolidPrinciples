// Great choice! Practicing questions on each design pattern is a fantastic way to solidify your understanding.
// I'll provide you with a question for each of the design patterns we discussed.
// 1. Singleton Pattern

// Question: Implement a Singleton pattern to manage a configuration settings manager.The configuration manager should allow you to set and get configuration values.
// Ensure that only one instance of the configuration manager exists throughout the application.

//     Requirements:

//     Implement the Singleton class ConfigManager.
//     Include methods setConfig(key, value) and getConfig(key).


class ConfigManager {
    constructor() {
      if (ConfigManager.instance) {
        return ConfigManager.instance; // Return the existing instance if already created
      }
  
      this.configs = {}; // Configuration storage
      ConfigManager.instance = this; // Store the instance
    //   console.log(this)
    }
  
    // Method to set a configuration
    setConfig(key, value) {
      this.configs[key] = value;
    }
  
    // Method to get a configuration
    getConfig(key) {
      return this.configs[key];
    }
  
    // Static method to get the Singleton instance
    static getInstance() {
      if (!ConfigManager.instance) {
        ConfigManager.instance = new ConfigManager();
      }
      return ConfigManager.instance;
    }
  }
  
  // Usage
  const config1 = ConfigManager.getInstance();
//   console.log(config1)
  config1.setConfig('appName', 'MyApp');
  config1.setConfig('version', '1.0.0');
  
  const config2 = ConfigManager.getInstance();
  console.log(config2.getConfig('appName')); // Output: MyApp
  console.log(config2.getConfig('version')); // Output: 1.0.0
  
console.log(config1 == config2)


// class Singleton {
//     constructor() {
//         if (Singleton.instance) {
//             return Singleton.instance;
//         }
//         Singleton.instance = this;
//         // Initialize other properties
//     }

//     // Example method
//     showMessage() {
//         console.log("Singleton instance");
//     }
// }

// // Usage
// const singleton1 = new Singleton();
// const singleton2 = new Singleton();
// let msg = singleton1.showMessage()
// // console.log(msg)
// console.log(singleton1.showMessage)
// console.log(singleton1 === singleton2);