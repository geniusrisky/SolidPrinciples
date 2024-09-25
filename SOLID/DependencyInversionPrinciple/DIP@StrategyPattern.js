// Scenario: You’re developing an e-commerce application with a payment system. The system supports multiple payment methods (e.g., Credit Card, PayPal). The client (checkout process) should not depend on the concrete payment methods directly but instead on an abstraction that represents a payment strategy.
// Task:

//     Create a PaymentStrategy interface with a method pay(amount).
//     Implement two payment strategies: CreditCardPayment and PayPalPayment.
//     Use the Strategy Pattern to allow the Checkout class to use different payment strategies without depending on their specific implementations.
//     Ensure that the Checkout class depends only on the PaymentStrategy interface.



// PaymentStrategy Interface (Abstraction)
class PaymentStrategy {
    pay(amount) {
        throw new Error("pay() must be implemented");
    }
}

// Credit Card Payment Strategy (Concrete Implementation)
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying $${amount} with Credit Card`);
    }
}

// PayPal Payment Strategy (Concrete Implementation)
class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying $${amount} with PayPal`);
    }
}

// Checkout class (High-level module)
class Checkout {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;  // Inject payment strategy (Dependency Injection)
    }

    processOrder(amount) {
        this.paymentStrategy.pay(amount);  // Delegate payment to the strategy
    }
}

// Usage:

// Use Credit Card Payment
const creditCardPayment = new CreditCardPayment();
const checkout1 = new Checkout(creditCardPayment);
checkout1.processOrder(100);  // Output: Paying $100 with Credit Card

// Use PayPal Payment
const payPalPayment = new PayPalPayment();
const checkout2 = new Checkout(payPalPayment);
checkout2.processOrder(50);  // Output: Paying $50 with PayPal
