// Chain of Responsibility Pattern Overview:

// The Chain of Responsibility pattern allows a request to pass through a chain of handlers until one of the handlers processes it. Each handler in the chain either processes the request or passes it to the next handler in the chain. This pattern promotes loose coupling between the sender and receiver by giving multiple objects the opportunity to handle the request.
// Key Components:

//     Handler: Defines an interface for handling requests.
//     Concrete Handler: Handles requests it is responsible for. Can pass the request to the next handler in the chain if it can't handle it.
//     Client: Sends requests to a handler in the chain.

// Example:

// Let’s implement a Support Ticket System where a ticket can be handled by different support levels (i.e., basic, intermediate, and advanced).





// Abstract Handler
class SupportHandler {
    setNext(handler) {
        this.nextHandler = handler;  // Set the next handler in the chain
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);  // Pass the request to the next handler
        }
        return null;
    }
}

// Concrete Handler 1: Basic Support
class BasicSupport extends SupportHandler {
    handle(request) {
        if (request.level === 'basic') {
            console.log("Basic Support: Handling request.");
            return true;  // Request is handled
        } 
        return super.handle(request);  // Pass to the next handler
    }
}

// Concrete Handler 2: Intermediate Support
class IntermediateSupport extends SupportHandler {
    handle(request) {
        if (request.level === 'intermediate') {
            console.log("Intermediate Support: Handling request.");
            return true;  // Request is handled
        } 
        return super.handle(request);  // Pass to the next handler
    }
}

// Concrete Handler 3: Advanced Support
class AdvancedSupport extends SupportHandler {
    handle(request) {
        if (request.level === 'advanced') {
            console.log("Advanced Support: Handling request.");
            return true;  // Request is handled
        }
        return super.handle(request);  // No handler found, so chain ends
    }
}

// Client code
const basic = new BasicSupport();
const intermediate = new IntermediateSupport();
const advanced = new AdvancedSupport();

// Building the chain: basic -> intermediate -> advanced
basic.setNext(intermediate).setNext(advanced);

// Sample requests
const request1 = { level: 'basic', description: 'Basic issue' };
const request2 = { level: 'intermediate', description: 'Intermediate issue' };
const request3 = { level: 'advanced', description: 'Advanced issue' };
const request4 = { level: 'unknown', description: 'Unknown issue' };

 basic.handle(request1);  // Basic Support handles it
 basic.handle(request2);  // Intermediate Support handles it
 basic.handle(request3);  // Advanced Support handles it

 basic.handle(request4);  // No handler for this request
//console.log(basic)