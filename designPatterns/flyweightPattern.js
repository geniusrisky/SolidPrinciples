// Let's dive into advanced design patterns, starting with the Flyweight pattern.
// Flyweight Pattern Overview:

// The Flyweight pattern is used to minimize memory usage or computational costs by sharing as much data as possible with similar objects. It is particularly useful when dealing with a large number of objects that share common properties.
// Key Points:

//     Intrinsic State: Shared state among multiple objects.
//     Extrinsic State: The state that differs among objects and must be passed into methods when needed.





// Imagine you're building a text editor, and you want to display thousands of characters on the screen. 
// Instead of creating a separate object for each character, which can consume a lot of memory, 
// the Flyweight pattern allows you to share objects that represent characters, 
// only storing the unique information (like font size or color) separately.

// Flyweight Factory
class CharacterFactory {
    constructor() {
        this.characters = {}; // Stores the shared (intrinsic) characters
    }

    getCharacter(char) {
        if (!this.characters[char]) {
            this.characters[char] = new Character(char); // Create new if doesn't exist
        }
        return this.characters[char];
    }

    getTotalCharacters() {
        return Object.keys(this.characters).length; // Return count of shared characters
    }
}

// Flyweight (shared object)
class Character {
    constructor(char) {
        this.char = char; // Intrinsic state (shared part of the character)
    }

    display(font, color) {
        console.log(`Character: ${this.char}, Font: ${font}, Color: ${color}`);
    }
}

// Client code
class Document {
    constructor() {
        this.characterList = [];
        this.factory = new CharacterFactory(); // Uses the Flyweight Factory
    }

    addCharacter(char, font, color) {
        const character = this.factory.getCharacter(char); // Get shared character object
        this.characterList.push({ character, font, color }); // Store extrinsic state
    }

    render() {
        this.characterList.forEach(item => {
            item.character.display(item.font, item.color);
        });
    }
}

// Usage
const doc = new Document();
doc.addCharacter('A', '12pt', 'red');
doc.addCharacter('B', '12pt', 'blue');
doc.addCharacter('A', '14pt', 'green'); // Same 'A' object shared

doc.render();
console.log(`Total distinct characters created: ${doc.factory.getTotalCharacters()}`);



//Exmaople 3


// Flyweight class that stores shared (intrinsic) data
class TreeType {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    display(x, y) {
        console.log(`Displaying a ${this.color} ${this.type} tree at (${x}, ${y})`);
    }
}

// Flyweight Factory that creates and manages TreeType objects
class TreeFactory {
    constructor() {
        this.treeTypes = {};
    }

    getTreeType(type, color) {
        const key = `${type}_${color}`;

        if (!this.treeTypes[key]) {
            this.treeTypes[key] = new TreeType(type, color); // Create new type if not available
        }

        return this.treeTypes[key]; // Return existing or newly created type
    }
}

// Context class that contains unique (extrinsic) data
class Tree {
    constructor(x, y, treeType) {
        this.x = x;
        this.y = y;
        this.treeType = treeType; // Shared flyweight object
    }

    display() {
        this.treeType.display(this.x, this.y); // Delegate to the TreeType's display method
    }
}

// Client class that manages a collection of trees
class Forest {
    constructor() {
        this.trees = [];
        this.treeFactory = new TreeFactory();
    }

    plantTree(x, y, type, color) {
        const treeType = this.treeFactory.getTreeType(type, color); // Reuse or create shared TreeType
        const tree = new Tree(x, y, treeType); // Create a new tree with unique position
        this.trees.push(tree);
    }

    displayTrees() {
        this.trees.forEach(tree => tree.display());
    }
}

// Usage
const forest = new Forest();

// Plant trees with shared types and unique positions
forest.plantTree(10, 20, 'Oak', 'Green');
forest.plantTree(15, 25, 'Oak', 'Green');
forest.plantTree(50, 60, 'Pine', 'Dark Green');
forest.plantTree(40, 70, 'Birch', 'White');

// Display all trees in the forest
forest.displayTrees();
