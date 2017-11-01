import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const playlist = [
    {url: '../music/06_-_Jailhouse_Rock.mp3', artist: {name: 'Metallica2', song: 'Fuel1'}}
]

class AudioPlayer extends Component {

    render() {
        return (
          <ReactAudioPlayer
              src="src/music/06_-_Jailhouse_Rock.mp3"
              controls
        />
        );
    }
}

export default AudioPlayer;
