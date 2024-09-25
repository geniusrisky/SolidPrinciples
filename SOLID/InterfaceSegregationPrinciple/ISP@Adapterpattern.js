//  Exercise: Adapter Pattern
// Scenario: You're developing a multimedia player that can play both audio and video files. The existing audio player works fine, but the new video player has a different interface. You need to integrate the video player into the multimedia player without forcing clients to depend on both audio and video interfaces if they only need one.


// Task:
// Create an AudioPlayer class that plays audio files using the playAudio() method.
// Implement a VideoPlayer class with a method playVideo().
// Create an AudioPlayerAdapter that adapts the VideoPlayer to work with the AudioPlayer interface so that the multimedia player can use either.
// The client should interact with the AudioPlayer interface only, regardless of whether it's playing audio or video.


// Audio Player interface
class AudioPlayer {
    playAudio(filename) {
        console.log(`Playing audio file: ${filename}`);
    }
}

// Video Player with a different interface
class VideoPlayer {
    playVideo(filename) {
        console.log(`Playing video file: ${filename}`);
    }
}

// Adapter that makes VideoPlayer compatible with AudioPlayer interface
class AudioPlayerAdapter extends AudioPlayer {
    constructor(videoPlayer) {
        super();
        this.videoPlayer = videoPlayer;
    }

    playAudio(filename) {
        // Delegate the call to playVideo method of VideoPlayer
        this.videoPlayer.playVideo(filename);
    }
}

// Client code
let audioPlayer = new AudioPlayer();
audioPlayer.playAudio("song.mp3");  // Output: Playing audio file: song.mp3

let videoPlayer = new VideoPlayer();
let videoAdapter = new AudioPlayerAdapter(videoPlayer);
videoAdapter.playAudio("movie.mp4");  // Output: Playing video file: movie.mp4
