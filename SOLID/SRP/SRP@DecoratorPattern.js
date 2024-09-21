// Single Responsibility Principle(SRP): A class should have only one reason to change.
// This principle focuses on ensuring that a class has only one job or responsibility.
// By following SRP, your code becomes more modular, easier to maintain, and easier to extend.


// 1. Decorator Pattern

// Explanation: The Decorator pattern is perfect for extending the functionality of a class without modifying its existing code. 
// By wrapping a class inside another decorator class, you can add new responsibilities while keeping the original class focused on its primary task. 
// This ensures that the original class adheres to SRP.

// Why It's Used with SRP:

//     Separation of Concerns: The class doesn’t handle multiple responsibilities (e.g., core functionality and additional features). 
//     Instead, decorators manage the extra functionality, leaving the base class unchanged.
//     Maintainability: Changes in decoration (additional features) don’t affect the base class, leading to easier maintenance.

// Real-world Example:

//     Suppose you have a class BasicReport that generates a report. 
//     Now, you want to add features such as adding headers and footers to the report. 
//     Instead of modifying the BasicReport class, you can create HeaderDecorator and FooterDecorator classes that wrap the BasicReport and add these new responsibilities.

// Base Pizza class
class Pizza {
    getCost() {
        return 10; // Base cost of the pizza
    }
}

// Decorator for Cheese
class Cheese {
    constructor(pizza) {
        this.pizza = pizza; // Decorate the pizza with cheese
    }

    getCost() {
        return this.pizza.getCost() + 2; // Add cost of cheese
    }
}

// Decorator for Olives
class Olives {
    constructor(pizza) {
        this.pizza = pizza; // Decorate the pizza with olives
    }

    getCost() {
        return this.pizza.getCost() + 1.5; // Add cost of olives
    }
}

// Decorator for Pepperoni
class Pepperoni {
    constructor(pizza) {
        this.pizza = pizza; // Decorate the pizza with pepperoni
    }

    getCost() {
        return this.pizza.getCost() + 3; // Add cost of pepperoni
    }
}

// Example usage:

// Creating a basic pizza
let pizza = new Pizza();
console.log("Base pizza cost: $" + pizza.getCost()); // Output: $10

pizza = new Cheese(pizza);
console.log("Base pizza cost with cheese: $" + pizza.getCost());

pizza = new Olives(pizza);
console.log("Base pizza cost with cheese: $" + pizza.getCost());

pizza = new Pepperoni(pizza);
console.log("Base pizza cost with cheese: $" + pizza.getCost());
