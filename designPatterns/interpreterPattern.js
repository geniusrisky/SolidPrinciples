// Interpreter Pattern Overview:

// The Interpreter Pattern is used to define a grammatical representation for a language and an interpreter to interpret the sentences of that language. It’s commonly used in scenarios where you need to parse and evaluate expressions, such as in rule engines, SQL parsing, or mathematical expression evaluations.
// Key Components:

//     Abstract Expression: Declares an abstract method for interpreting the context.
//     Terminal Expression: Implements the interpret method for the terminal symbols of the grammar.
//     Non-terminal Expression: Implements the interpret method for non-terminal symbols, usually composed of terminal expressions.
//     Context: Contains information that's global to the interpreter.

// Example:

// Let’s implement a simple arithmetic expression interpreter that supports addition and subtraction



class Expression {
    interpret() {
        throw new Error('This method should be overridden!');
    }
}



class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}


class AddExpression extends Expression {
    constructor(leftExpression, rightExpression) {
        super();
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }

    interpret() {
        return this.leftExpression.interpret() + this.rightExpression.interpret();
    }
}


class SubtractExpression extends Expression {
    constructor(leftExpression, rightExpression) {
        super();
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }

    interpret() {
        return this.leftExpression.interpret() - this.rightExpression.interpret();
    }
}





class Context {
    constructor() {
        this.variables = {};
    }

    setVariable(name, expression) {
        this.variables[name] = expression;
    }

    getVariable(name) {
        return this.variables[name].interpret();
    }
}


// Create the context and define some numbers
const context = new Context();
const five = new NumberExpression(5);
const ten = new NumberExpression(10);

// Create expressions for addition and subtraction
const addExpression = new AddExpression(five, ten);  // 5 + 10
const subtractExpression = new SubtractExpression(ten, five);  // 10 - 5

console.log("5 + 10 = " + addExpression.interpret());  // Output: 15
console.log("10 - 5 = " + subtractExpression.interpret());  // Output: 5

// Store variables in the context
context.setVariable('five', five);
context.setVariable('ten', ten);

// Use context to retrieve and evaluate expressions
console.log("Context variable 'five': " + context.getVariable('five'));  // Output: 5
console.log("Context variable 'ten': " + context.getVariable('ten'));  // Output: 10
