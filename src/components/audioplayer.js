import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: null,
            track: null,
            currentTime: 0
        }
    }
    
    onLoadedMetadata = (event, data) => {
        this.setState({
            duration: event.currentTarget.duration,
            track: event.currentTarget,
            playing: false
        })
        if(this.props.nextTrack) {
            event.currentTarget.play();
            this.setState({playing: true})
        }
    }
    onTogglePlay = () => {
        if (this.state.playing) {
          this.state.track.pause();
        } else {
          this.state.track.play();
        }
        this.setState({playing: !this.state.playing})
    }
    onListen=(event) => {
        this.setState({currentTime: event})
    }
    render () {
        if (!this.props.track) {
            return <div>Loading...</div>
        }
        return (
            <div className='player'>
                <span className='player-track-title'>{this.props.track.artist_name} - {this.props.track.track_title}</span>
                <ReactAudioPlayer
                    src={this.props.track.track_listen_url}
                    onLoadedMetadata={(event)=>this.onLoadedMetadata(event)}
                    onListen={(event)=>this.onListen(event)}
                    listenInterval={1000}
                />
                <PlayButton onTogglePlay={this.onTogglePlay}
                />
                <Timer className='timer' duration={this.state.duration} currentTime={this.state.currentTime}/>
                <div className="progress">
                    <div className="bar" style={{width: `${this.state.currentTime*100/this.state.duration || 0}`}}></div>
                </div>
            </div>
        );
    }
};

export default AudioPlayer;
//this.state.currentTime*100/this.state.duration
