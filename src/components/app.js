import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { fetchMusic, chooseTrack } from '../actions';
import AudioPlayer from './audioplayer';
import AudioList from './audioList';


class App extends Component {
    componentDidMount(){
        this.props.fetchMusic();
    }   
    render() {
        return (
            <div>
                <AudioPlayer track={this.props.track} nextTrack={this.props.nextTrack}/>
                <AudioList music={this.props.music} chooseTrack={this.props.chooseTrack}/>
            </div>
        );
    }
}

function  mapStateToProps(state) {
  return { music: state.music, track: state.music.track, nextTrack: state.music.nextTrack }

}
export default connect(mapStateToProps, { fetchMusic, chooseTrack })(App);