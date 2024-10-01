// Memento Pattern Overview:

// The Memento pattern allows you to capture and restore an object's state without violating encapsulation. It is used to save the state of an object so it can be restored later. The main components are:

//     Originator: The object whose state you want to save.
//     Memento: The object that stores the state of the Originator.
//     Caretaker: The object that manages saving and restoring the Originator's state via Memento objects.



// Memento: Stores the state
class Memento {
    constructor(state) {
        this.state = state; // Stores the text state
    }

    getState() {
        return this.state;
    }
}

// Originator: The object whose state needs to be saved
class TextEditor {
    constructor() {
        this.text = ""; // Initial empty text
    }

    type(words) {
        this.text += words; // Add typed words
    }

    getText() {
        return this.text;
    }

    save() {
        return new Memento(this.text); // Save current state to Memento
    }

    restore(memento) {
        this.text = memento.getState(); // Restore state from Memento
    }
}

// Caretaker: Manages saving and restoring states
class Caretaker {
    constructor(editor) {
        this.editor = editor;
        this.history = []; // Stores the history of Mementos
    }

    save() {
        console.log("Saving state...");
        this.history.push(this.editor.save()); // Save current editor state
    }

    undo() {
        if (this.history.length > 0) {
            const memento = this.history.pop();
            console.log("Restoring state...");
            this.editor.restore(memento); // Restore the last saved state
        } else {
            console.log("No state to restore.");
        }
    }
}

// Usage example:
const editor = new TextEditor();
const caretaker = new Caretaker(editor);

editor.type("Hello ");
caretaker.save();  // Save the state

editor.type("World!");
caretaker.save();  // Save the state

console.log("Current Text: ", editor.getText());  // Hello World!

caretaker.undo();  // Undo last change
console.log("After Undo: ", editor.getText());  // Hello

caretaker.undo();  // Undo again
console.log("After Undo: ", editor.getText());  // Empty
