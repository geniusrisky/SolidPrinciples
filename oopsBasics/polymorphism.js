// Base class: Animal
// class Animal {
//     // makeSound() {
//     //     console.log("This animal makes a sound.");
//     // }
// }

// // Subclass: Dog
// class Dog extends Animal {
//     makeSound() {
//         console.log("The dog barks.");
//     }
// }

// // Subclass: Cat
// class Cat extends Animal {
//     makeSound() {
//         console.log("The cat meows.");
//     }
// }

// // Subclass: Cow
// class Cow extends Animal {
//     makeSound() {
//         console.log("The cow moos.");
//     }
// }

// // Polymorphism in action
// const animals = [new Dog(), new Cat(), new Cow()];

// animals.forEach(animal => animal.makeSound());


// Base class: Animal
class Shapes {
    calculateArea() {
        console.log("This is the area of shape");
    }
}

// Subclass: Dog
class Circle extends Shapes {
    calculateArea() {
        console.log("This is the area of circle");
    }
}

// Subclass: Cat
class Rectangle extends Shapes {
    calculateArea() {
        console.log("This is the area of rectangle");
    }
}

// Subclass: Cow
class Square extends Shapes {
    calculateArea() {
        console.log("This is the area of square");
    }
}

// Polymorphism in action
const shapes = [new Circle(), new Rectangle(), new Square()];

shapes.forEach(shape => shape.calculateArea());
