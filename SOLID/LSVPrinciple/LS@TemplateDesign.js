// Scenario: You're creating a file processing system where different types of files (e.g., CSV, JSON, XML) are processed. The processing steps are similar (reading, validating, and saving the file), but each file type may have a different implementation for some of these steps. This needs to follow LSP, ensuring any file type can be substituted for another without breaking the system.

// Task:
// Create an abstract class FileProcessor that defines the template method processFile().
// Implement methods like readFile(), validateFile(), and saveFile() in the abstract class, allowing subclasses to override specific steps.
// Implement concrete classes CSVFileProcessor, JSONFileProcessor, and XMLFileProcessor that extend the template method.
// Demonstrate how the template method allows different file types to be processed while adhering to the LSP.

// Explanation of Why These Patterns Fit LSP:

// Template Method Pattern: This pattern allows subclasses to override certain steps of an algorithm while keeping the overall structure intact. 
// It maintains LSP by ensuring that the substituted subclasses (CSVFileProcessor, JSONFileProcessor, etc.) adhere to the same general algorithm defined in the base class (FileProcessor). 
// The client can substitute any file processor without altering the system's correctness.

// Abstract FileProcessor class
class FileProcessor {
  processFile() {
    this.readFile();
    this.validateFile();
    this.saveFile();
  }

  readFile() {
    throw new Error("This method must be overridden");
  }

  validateFile() {
    throw new Error("This method must be overridden");
  }

  saveFile() {
    console.log("File saved successfully.");
  }
}

// Concrete CSV File Processor
class CSVFileProcessor extends FileProcessor {
  readFile() {
    console.log("Reading CSV file...");
  }

  validateFile() {
    console.log("Validating CSV file...");
  }
}

// Concrete JSON File Processor
class JSONFileProcessor extends FileProcessor {
  readFile() {
    console.log("Reading JSON file...");
  }

  validateFile() {
    console.log("Validating JSON file...");
  }
}

// Concrete XML File Processor
class XMLFileProcessor extends FileProcessor {
  readFile() {
    console.log("Reading XML file...");
  }

  validateFile() {
    console.log("Validating XML file...");
  }
}

// Client code
let csvProcessor = new CSVFileProcessor();
csvProcessor.processFile(); // Output: Reading CSV file... Validating CSV file... File saved successfully.

let jsonProcessor = new JSONFileProcessor();
jsonProcessor.processFile(); // Output: Reading JSON file... Validating JSON file... File saved successfully.

let xmlProcessor = new XMLFileProcessor();
xmlProcessor.processFile(); // Output: Reading XML file... Validating XML file... File saved successfully.
