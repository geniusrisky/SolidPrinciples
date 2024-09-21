// 2. Facade Pattern

// Explanation: The Facade pattern provides a simplified interface to a complex system of classes. 
//This helps to ensure that classes interacting with the system don’t take on unnecessary responsibilities or become tightly coupled to its complexity.

// Why It's Used with SRP:

//     Encapsulation: The complex subsystem remains encapsulated behind the facade, so the clients aren’t exposed to unnecessary complexity, adhering to SRP.
//     Simplified Interface: The class that uses the facade only focuses on the interaction it needs to perform, delegating complex operations to the facade.

// Real-world Example:

//     Consider a class EmailService that sends emails. If email sending involves multiple steps (connecting to a server, setting up headers, sending the message), 
//you can hide these details behind a facade so that the client class only needs to call one sendEmail() method.

// Exercise:

//     Implement a HomeTheaterFacade class that combines operations like turning on the TV, DVD player, and sound system.
//     The client code should only interact with the HomeTheaterFacade and not worry about the individual components.

    // TV Subsystem
// class TV {
//     turnOn() {
//       console.log("Turning on the TV...");
//     }
    
//     turnOff() {
//       console.log("Turning off the TV...");
//     }
//   }
  
//   // DVD Player Subsystem
//   class DVDPlayer {
//     turnOn() {
//       console.log("Turning on the DVD Player...");
//     }
    
//     turnOff() {
//       console.log("Turning off the DVD Player...");
//     }
  
//     playMovie(movie) {
//       console.log(`Playing movie: ${movie}`);
//     }
//   }
  
//   // Sound System Subsystem
//   class SoundSystem {
//     turnOn() {
//       console.log("Turning on the Sound System...");
//     }
    
//     turnOff() {
//       console.log("Turning off the Sound System...");
//     }
  
//     setVolume(level) {
//       console.log(`Setting sound system volume to ${level}`);
//     }
//   }
  
//   // Facade Class
//   class HomeTheaterFacade {
//     constructor(tv, dvdPlayer, soundSystem) {
//       this.tv = tv;
//       this.dvdPlayer = dvdPlayer;
//       this.soundSystem = soundSystem;
//     }
  
//     watchMovie(movie) {
//       console.log("Preparing to watch a movie...");
//       this.tv.turnOn();
//       this.dvdPlayer.turnOn();
//       this.soundSystem.turnOn();
//       this.soundSystem.setVolume(5);
//       this.dvdPlayer.playMovie(movie);
//       console.log("Movie is starting!");
//     }
  
//     endMovie() {
//       console.log("Shutting down the home theater...");
//       this.tv.turnOff();
//       this.dvdPlayer.turnOff();
//       this.soundSystem.turnOff();
//     }
//   }
  
//   // Client code
  
//   const tv = new TV();
//   const dvdPlayer = new DVDPlayer();
//   const soundSystem = new SoundSystem();
  
//   const homeTheater = new HomeTheaterFacade(tv, dvdPlayer, soundSystem);
  
//   // Watching a movie
//   homeTheater.watchMovie("Inception");
  
//   // Ending the movie
//   homeTheater.endMovie();
  

class TV{

    turnOn(){
        console.log(`tv is turning on`);
    }

    turnOff(){
        console.log(`Tv is turning off`);
    }
}

//dvd

  class DVDPlayer {
    turnOn() {
      console.log("Turning on the DVD Player...");
    }
    
    turnOff() {
      console.log("Turning off the DVD Player...");
    }
  
    playMovie(movie) {
      console.log(`Playing movie: ${movie}`);
    }
  }
   class HomeTheaterFacade {
    constructor(tv, dvdPlayer, soundSystem) {
      this.tv = tv;
      this.dvdPlayer = dvdPlayer;
      this.soundSystem = soundSystem;
    }
  
    watchMovie(movie) {
      console.log("Preparing to watch a movie...");
      this.tv.turnOn();
      this.dvdPlayer.turnOn();
      this.soundSystem.turnOn();
      this.soundSystem.setVolume(5);
      this.dvdPlayer.playMovie(movie);
      console.log("Movie is starting!");
    }
  
    endMovie() {
      console.log("Shutting down the home theater...");
      this.tv.turnOff();
      this.dvdPlayer.turnOff();
      this.soundSystem.turnOff();
     }
   }


// sound System

  class SoundSystem {
    turnOn() {
      console.log("Turning on the Sound System...");
    }
    
    turnOff() {
      console.log("Turning off the Sound System...");
    }
  
    setVolume(level) {
      console.log(`Setting sound system volume to ${level}`);
    }
  }


let tv = new TV();
let dvdPlayer = new DVDPlayer();
let soundSystem = new SoundSystem();
let homeTheatre = new HomeTheaterFacade(tv, dvdPlayer, soundSystem);


homeTheatre.watchMovie('INCEPTION')
homeTheatre.endMovie()

