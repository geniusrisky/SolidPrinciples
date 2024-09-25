// Scenario: You're building a document editor application. The editor should be able to handle different document types (e.g., Word, PDF, Excel) through a common interface. By applying the Liskov Substitution Principle (LSP), any document type should be substitutable for another without breaking the editor's functionality.

// Task:
// Create an abstract Document class with a method open().
// Implement concrete subclasses WordDocument, PDFDocument, and ExcelDocument, each with its own implementation of open().
// Create a DocumentFactory that uses the Factory Method Pattern to create the appropriate document type.
// Write a client code that interacts with DocumentFactory and can substitute different document types without altering the code's correctness.

// Explanation of Why These Patterns Fit LSP:
// Factory Method Pattern: This pattern ensures that objects of different types can be created through a common interface. 
// It maintains LSP by allowing the client code to work with objects of the base class (Document) without needing to know the specific subclass. 
// The client code doesn't break when substituting one document type for another.




// Abstract Document class
class Document {
  open() {
    throw new Error("This method must be implemented");
  }
}

// Concrete Word Document
class WordDocument extends Document {
  open() {
    console.log("Opening a Word Document...");
  }
}

// Concrete PDF Document
class PDFDocument extends Document {
  open() {
    console.log("Opening a PDF Document...");
  }
}

// Concrete Excel Document
class ExcelDocument extends Document {
  open() {
    console.log("Opening an Excel Document...");
  }
}

// Factory Method Pattern
class DocumentFactory {
  static createDocument(type) {
    switch (type) {
      case "word":
        return new WordDocument();
      case "pdf":
        return new PDFDocument();
      case "excel":
        return new ExcelDocument();
      default:
        throw new Error("Unknown document type");
    }
  }
}

// Client code
let doc = DocumentFactory.createDocument("word");
doc.open(); // Output: Opening a Word Document...

doc = DocumentFactory.createDocument("pdf");
doc.open(); // Output: Opening a PDF Document...

doc = DocumentFactory.createDocument("excel");
doc.open(); // Output: Opening an Excel Document...
