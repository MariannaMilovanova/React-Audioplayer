import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const playlist = [
    {url: '../music/06_-_Jailhouse_Rock.mp3', artist: {name: 'Metallica2', song: 'Fuel1'}},
    {url: '../music/Cellophane_Sam_-_02_-_Birds_at_Sea.mp3', artist: {name: 'Metallica3', song: 'Fuel'}},
    {url: '../music/Rafael_Archangel_-_21_-_Persistence.mp3', artist: {name: 'Metallica4', song: 'Fuel'}}
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
