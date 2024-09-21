// 4. Strategy Pattern
// Explanation: The Strategy pattern allows you to define a family of algorithms and make them interchangeable. 
// This can be used to ensure that each class or algorithm adheres to SRP, as each strategy class only focuses on one specific behavior.

// Why It's Used with SRP:

// Separation of Algorithms: Each strategy focuses on a specific behavior or algorithm. 
// The context class doesn't need to manage multiple behaviors; it simply selects the appropriate strategy.
// Interchangeable Behavior: You can add new behaviors without modifying the existing context class.
// Real-world Example:

// A PaymentProcessor class might have different payment strategies such as CreditCardPayment, PayPalPayment, or BitcoinPayment. 
// The PaymentProcessor class adheres to SRP by only handling payment processing, while each strategy handles a specific payment method.
// Exercise:

// Implement a TextEditor class that can change text formatting (e.g., bold, italic, underline).
// Use the Strategy pattern to create BoldFormatter, ItalicFormatter, and UnderlineFormatter strategies, and switch between them dynamically.
// Ensure the TextEditor class adheres to SRP by focusing only on text management and not formatting.


// Strategy Interface
class TextFormatter {
    format(text) {
      throw new Error("TextFormatter's format method should be implemented.");
    }
  }
  
  // Concrete Strategy: BoldFormatter
  class BoldFormatter extends TextFormatter {
    format(text) {
      return `**${text}**`;  // For example, bold in markdown syntax
    }
  }
  
  // Concrete Strategy: ItalicFormatter
  class ItalicFormatter extends TextFormatter {
    format(text) {
      return `*${text}*`;  // Italic in markdown syntax
    }
  }
  
  // Concrete Strategy: UnderlineFormatter
  class UnderlineFormatter extends TextFormatter {
    format(text) {
      return `__${text}__`;  // Underline in markdown-like syntax
    }
  }
  
  // TextEditor class
  class TextEditor {
    constructor() {
      this.text = '';
      this.formatter = null;  // Strategy for text formatting
    }
  
    // Set the text to be managed
    setText(text) {
      this.text = text;
    }
  
    // Set the formatting strategy dynamically
    setFormatter(formatter) {
      this.formatter = formatter;
    }
  
    // Apply the formatter to the text
    applyFormatting() {
      if (!this.formatter) {
        console.log("No formatter is set.");
        return this.text;
      }
      return this.formatter.format(this.text);
    }
  }
  
  // Client code
  
  // Create the text editor
  const editor = new TextEditor();
  
  // Set the text to manage
  editor.setText("Hello, World!");
  
  // Apply bold formatting
  const boldFormatter = new BoldFormatter();
  editor.setFormatter(boldFormatter);
  console.log("Bold formatting: ", editor.applyFormatting());
  
  // Apply italic formatting
  const italicFormatter = new ItalicFormatter();
  editor.setFormatter(italicFormatter);
  console.log("Italic formatting: ", editor.applyFormatting());
  
  // Apply underline formatting
  const underlineFormatter = new UnderlineFormatter();
  editor.setFormatter(underlineFormatter);
  console.log("Underline formatting: ", editor.applyFormatting());
  
