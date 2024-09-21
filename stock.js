class Stock {
    constructor(name) {
        this.name = name;      // Stock name (e.g., "AAPL")
        this.price = 0;        // Initial stock price
        this.investors = [];   // List of registered investors
    }

    // Register an investor
    register(investor) {
        this.investors.push(investor);
    }

    // Remove an investor
    remove(investor) {
        this.investors = this.investors.filter(inv => inv !== investor);
    }

    // Notify all registered investors
    notify() {
        for (const investor of this.investors) {
            investor.update(this.name, this.price);
        }
    }

    // Update the stock price and notify investors
    setPrice(newPrice) {
        this.price = newPrice;
        this.notify();
    }
}

class Investor {
    constructor(name) {
        this.name = name;  // Investor's name
    }

    // Method to be called when the stock price changes
    update(stockName, price) {
        // This method should be overridden by subclasses
        throw new Error('Method "update" must be implemented.');
    }
}


class BuyInvestor extends Investor {
    update(stockName, price) {
        console.log(`${this.name} sees that ${stockName} is now $${price}. Buying more!`);
    }
}

class SellInvestor extends Investor {
    update(stockName, price) {
        console.log(`${this.name} sees that ${stockName} is now $${price}. Selling some stocks!`);
    }
}


let newStock = new Stock('lalla');
let person1 = new BuyInvestor('Genius');
let person2 = new BuyInvestor('fiveStar');
newStock.register(person1);
newStock.register(person2);
console.log(person1.update('lalla', 2300));
console.log(newStock.setPrice(200));
console.log(newStock)


// // Create a new stock
// const appleStock = new Stock('AAPL');

// // Create investors
// const investor1 = new BuyInvestor('Alice');
// const investor2 = new SellInvestor('Bob');

// // Register investors with the stock
// appleStock.register(investor1);
// appleStock.register(investor2);

// // Change stock price and notify investors
// appleStock.setPrice(150);  // Output: Alice sees that AAPL is now $150. Buying more!
// //                            Bob sees that AAPL is now $150. Selling some stocks!

// // Unregister an investor and change the price again
// appleStock.remove(investor2);
// appleStock.setPrice(160);  // Output: Alice sees that AAPL is now $160. Buying more!


