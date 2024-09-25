// 3. Exercise: Template Method Pattern
// Scenario: You're building a system for generating reports. Different departments (e.g., HR, Sales, IT) need different formats, but the basic process of generating a report remains the same (fetching data, processing it, and then exporting it).

// Task:
// Create an abstract class ReportGenerator that defines the template method generateReport().
// Implement methods like fetchData(), processData(), and exportReport() as steps that subclasses can override.
// Implement concrete classes like HRReport, SalesReport, and ITReport that extend the template but override specific steps.
// Demonstrate that new report types can be added without modifying the base ReportGenerator.

// Abstract class
class ReportGenerator {
  generateReport() {
    this.fetchData();
    this.processData();
    this.exportReport();
  }

  fetchData() {
    throw new Error("This method must be overridden by subclasses");
  }

  processData() {
    throw new Error("This method must be overridden by subclasses");
  }

  exportReport() {
    throw new Error("This method must be overridden by subclasses");
  }
}

// Concrete Classes
class HRReport extends ReportGenerator {
  fetchData() {
    console.log("Fetching HR data...");
  }

  processData() {
    console.log("Processing HR data...");
  }

  exportReport() {
    console.log("Exporting HR report...");
  }
}

class SalesReport extends ReportGenerator {
  fetchData() {
    console.log("Fetching Sales data...");
  }

  processData() {
    console.log("Processing Sales data...");
  }

  exportReport() {
    console.log("Exporting Sales report...");
  }
}

// Usage
let hrReport = new HRReport();
hrReport.generateReport();

let salesReport = new SalesReport();
salesReport.generateReport();
