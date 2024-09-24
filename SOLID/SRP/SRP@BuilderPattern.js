// 6. Builder Pattern
// Explanation: The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

// Why It's Used with SRP:

// Separation of Construction Logic: The builder focuses on constructing an object step by step, while the object itself focuses on its primary functionality.
// Modular Design: Each builder class is responsible for building a specific variant of the object, keeping construction logic separate from other responsibilities.
// Real-world Example:

// A HouseBuilder class that constructs different types of houses (e.g., wooden house, brick house) but keeps the construction process separate from the house's main functionality.
// Exercise:

// Implement a ComputerBuilder class to construct a custom PC with components like CPU, RAM, and GPU.
// Ensure that the ComputerBuilder adheres to SRP by separating the construction of the computer from its functionality.



// Product: Computer
class Computer {
    constructor(cpu, ram, gpu) {
        this.cpu = cpu;
        this.ram = ram;
        this.gpu = gpu;
    }

    displaySpecs() {
        console.log(`CPU: ${this.cpu}, RAM: ${this.ram}, GPU: ${this.gpu}`);
    }
}

// Builder: ComputerBuilder
class ComputerBuilder {
    constructor() {
        this.cpu = '';
        this.ram = '';
        this.gpu = '';
    }

    // Method to set CPU
    setCPU(cpu) {
        this.cpu = cpu;
        return this; // Return the builder to allow chaining
    }

    // Method to set RAM
    setRAM(ram) {
        this.ram = ram;
        return this; // Return the builder to allow chaining
    }

    // Method to set GPU
    setGPU(gpu) {
        this.gpu = gpu;
        return this; // Return the builder to allow chaining
    }

    // Final method to build the Computer
    build() {
        return new Computer(this.cpu, this.ram, this.gpu);
    }
}

// Example usage
const builder = new ComputerBuilder();
const customPC = builder
    .setCPU('Intel i9')
    .setRAM('32GB')
    .setGPU('NVIDIA RTX 3080')
    .build();

customPC.displaySpecs();
// Output: CPU: Intel i9, RAM: 32GB, GPU: NVIDIA RTX 3080
