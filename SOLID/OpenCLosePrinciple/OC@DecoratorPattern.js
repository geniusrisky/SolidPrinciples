
// 2. Exercise: Decorator Pattern
// Scenario: You’re creating a notification system for a messaging app. The base notification sends a basic message, but you want to be able to add additional notifications like SMS, Email, and Push notifications without modifying the base notification class.

// Task:
// Create a Notification class that has a send() method.
// Implement decorators like SMSNotification, EmailNotification, and PushNotification that extend the functionality of the base Notification class.
// Show how the notification system remains open for adding new notification types without modifying the original Notification class.


// Base Notification class
class Notification {
    send() {
        return "Basic Notification";
    }
}

// Decorator class
class NotificationDecorator extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
    }

    send() {
        return this.notification.send();
    }
}

// Concrete decorators
class SMSNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + SMS Notification`;
    }
}

class EmailNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + Email Notification`;
    }
}

class PushNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + Push Notification`;
    }
}

// Usage
let notification = new Notification();
console.log(notification.send());

notification = new SMSNotification(notification);
console.log(notification.send());

notification = new EmailNotification(notification);
console.log(notification.send());

notification = new PushNotification(notification);
console.log(notification.send());
