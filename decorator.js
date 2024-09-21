// 5. Decorator Pattern

// Question: Implement a Decorator pattern to extend the functionality of a basic notification system. The base notification system sends a simple text notification. 
// Decorators should add features like sending email notifications, SMS notifications, or push notifications.

// Requirements:

//     Create a base Notification class with a send() method.
//     Implement decorators EmailNotification, SMSNotification, and PushNotification that extend the functionality of the base notification.
//     Ensure that you can combine multiple decorators to send notifications through multiple channels. 


// class Notification{
//     constructor(service){
//         this.service = service
//     }
//     sendNotification(){
//         return this.service;
//     }


// }

// class PushNotification extends Notification{
//     send(){
//         console.log(`Email has sent successfully`);
//     }
// }

// class SMSNotification extends Notification{
//     sendSMS(){
//         console,log(`sms has sent successfully`);
//     }
// }

// class EmailNotification extends Notification{
//     sendEmail(){
//         console.log(`Email has sent successfully`);
//     }
// }
// Base Notification class
class Notification {
    send() {
        return "Basic Notification";
    }
}

// Decorator class that wraps a notification
class NotificationDecorator extends Notification {
    constructor(notification) {
        super();
        this.notification = notification;
    }

    send() {
        return this.notification.send();
    }
}

// Concrete decorator for Email Notification
class EmailNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + Email Notification`;
    }
}

// Concrete decorator for SMS Notification
class SMSNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + SMS Notification`;
    }
}

// Concrete decorator for Push Notification
class PushNotification extends NotificationDecorator {
    send() {
        return `${super.send()} + Push Notification`;
    }
}

// //Usage
 const basicNotification = new Notification();
// console.log(basicNotification.send()); 
// // Output: Basic Notification

const emailNotification = new EmailNotification(basicNotification);
console.log(emailNotification.send()); 
// Output: Basic Notification + Email Notification

const smsNotification = new SMSNotification(emailNotification);
console.log(smsNotification.send());
// // Output: Basic Notification + Email Notification + SMS Notification

const pushNotification = new PushNotification(smsNotification);
console.log(pushNotification.send());
// // Output: Basic Notification + Email Notification + SMS Notification + Push Notification
