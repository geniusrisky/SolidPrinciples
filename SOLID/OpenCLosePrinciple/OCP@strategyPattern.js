// Scenario: You're building a payment system for an e-commerce platform. You want to implement different payment methods (e.g., Credit Card, PayPal, Bitcoin), but you want the system to remain open for adding new payment methods without modifying the existing code.

// Task:
// Create an interface PaymentStrategy with a method pay(amount).
// Implement three concrete strategies: CreditCardPayment, PayPalPayment, and BitcoinPayment.
// Create a class PaymentContext that accepts a PaymentStrategy and uses it to process the payment.
// Implement a new payment method (like ApplePayPayment) by extending the system without modifying the existing strategies or context.






// Strategy Interface
class PaymentStrategy {
    pay(amount) {
        throw new Error("This method must be implemented");
    }
}

// Concrete Strategies
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal.`);
    }
}

class BitcoinPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Bitcoin.`);
    }
}

// Context
class PaymentContext {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount) {
        this.paymentMethod.pay(amount);
    }
}

// Usage
let payment = new PaymentContext(new CreditCardPayment());
payment.processPayment(100);

payment = new PaymentContext(new PayPalPayment());
payment.processPayment(200);

// Add a new strategy
class ApplePayPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid ${amount} using Apple Pay.`);
    }
}

payment = new PaymentContext(new ApplePayPayment());
payment.processPayment(300);
