import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { fetchMusic, chooseTrack } from '../actions';
import AudioPlayer from './audioplayer';
import AudioList from './audioList';


class App extends Component {
    componentDidMount(){
        this.props.fetchMusic();
    }
    componentWillReciveProps(nextProps) {
        if (this.props.track!=nextProps.track) {
            this.forceUpdate();
        }
    }   
    render() {
        if (!this.props.track) {
            return <div>Loading...</div>
        }
        const streamUrl = this.props.track.track_listen_url;
        return (
            <div>
                { this.props.track && <AudioPlayer  streamUrl = {streamUrl} track={this.props.track}/> }
                <AudioList music={this.props.music} chooseTrack={this.props.chooseTrack}/>
            </div>
        );
    }
}

function  mapStateToProps(state) {
  return { music: state.music, track: state.music.track  }

}
export default connect(mapStateToProps, { fetchMusic, chooseTrack })(App);