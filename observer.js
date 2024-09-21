// class Subject {
//     constructor() {
//         this.observers = [];
//     }

//     addObserver(observer) {
//         this.observers.push(observer);
//     }

//     notifyObservers(message) {
//         this.observers.forEach(observer => observer.update(message));
//     }
// }

// class Observer {
//     update(message) {
//         console.log(`Received message: ${message}`);
//     }
// }

// // Usage
// const subject = new Subject();
// const observer1 = new Observer();
// const observer2 = new Observer();

// subject.addObserver(observer1);
// subject.addObserver(observer2);

// subject.notifyObservers('Hello Observers!');



// Question: Implement an Observer pattern for a weather station that provides updates to various display devices (like a phone display, a computer display). 
// The weather station should notify all registered displays whenever the temperature changes.

// Requirements:

//     Create a WeatherStation class (Subject) with methods to register, remove, and notify observers.
//     Create an Observer interface with an update(temperature) method.
//     Implement concrete observer classes like PhoneDisplay and ComputerDisplay.

class WeatherStation{
    constructor(){
        this.Observers = []
    }

    register(observer){
        this.Observers.push(observer)
    }

    remove(observer){
            const index = this.Observers.indexOf(observer);
            if (index !== -1) {
                this.Observers.splice(index, 1); // Remove observer using splice
            } else {
                console.log("Observer not found.");
            }
    }

    notify(temperature){
        this.Observers.forEach((observer)=>{
            observer.update(temperature);
        })
    }
}


class Observer{
    update(temperature){
        console.log(`temperature updated: ${temperature}`);
    }
}

let weather = new WeatherStation();
const observer1 = new Observer();
const observer2 = new Observer();
weather.register(observer1);
weather.register(observer2);

weather.notify(`26degree`)
