// 2. Factory Pattern

// Question: Design a Factory pattern for a pizza store that serves different types of pizzas. 
// Create a PizzaFactory that produces different types of pizzas like CheesePizza, PepperoniPizza, and VeggiePizza.
//  Each pizza type should have a method to describe itself.

// Requirements:

//     Create an abstract Pizza class with a method describe().
//     Implement concrete classes CheesePizza, PepperoniPizza, and VeggiePizza.
//     Create a PizzaFactory class with a method createPizza(type).



class Pizza {
    constructor() {
        this.toppings = []; // Initialize an empty array for toppings
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    describe() {
        throw new Error("This method must be overridden by subclasses");
    }

    listToppings() {
    // cheesePizza.addTopping('oregano');
        if (this.toppings.length > 0) {
            return ` with toppings: ${this.toppings.join(',')}`;
        }
        return ''; // Return empty string if no toppings
    }
}

// Concrete Pizza classes
class CheesePizza extends Pizza {
    describe() {
        return `This is a Cheese Pizza, topped with mozzarella and cheddar${this.listToppings()}.`;
    }
}

class PepperoniPizza extends Pizza {
    describe() {
        return `This is a Pepperoni Pizza, topped with spicy pepperoni slices${this.listToppings()}.`;
    }
}

class VeggiePizza extends Pizza {
    describe() {
        return `This is a Veggie Pizza, topped with fresh vegetables like bell peppers, onions, and olives${this.listToppings()}.`;
    }
}


class PizzaFactory {
    static createPizza(type) {
        switch(type.toLowerCase()) {
            case 'cheese':
                return new CheesePizza();
            case 'pepperoni':
                return new PepperoniPizza();
            case 'veggie':
                return new VeggiePizza();
            default:
                throw new Error("Invalid pizza type");
        }
    }
}


try {
    // Create a cheese pizza
    const cheesePizza = PizzaFactory.createPizza('cheese');
    cheesePizza.addTopping('extra cheese');
    cheesePizza.addTopping('oregano');
    console.log(cheesePizza.describe()); // This is a Cheese Pizza, topped with mozzarella and cheddar with toppings: extra cheese, oregano.

    //Create a pepperoni pizza
    const pepperoniPizza = PizzaFactory.createPizza('pepperoni');
    pepperoniPizza.addTopping('mushrooms');
    pepperoniPizza.addTopping('onions');
    console.log(pepperoniPizza.describe()); // This is a Pepperoni Pizza, topped with spicy pepperoni slices with toppings: mushrooms, onions.

    // Create a veggie pizza
    const veggiePizza = PizzaFactory.createPizza('veggie');
    veggiePizza.addTopping('spinach');
    console.log(veggiePizza.describe()); // This is a Veggie Pizza, topped with fresh vegetables like bell peppers, onions, and olives with toppings: spinach.
} catch (error) {
    console.error(error.message);
}


// class Car {
//     constructor(model) {
//         this.model = model;
//     }
//     drive() {
//         console.log(`Driving a ${this.model}`);
//     }
// }

// class CarFactory {
//      createCar(model) {
//         return new Car(model);
//     }
// }

// // Usage
// const myCar = new CarFactory();
// console.log(myCar.createCar('maruti').drive()); // Driving a Toyota
