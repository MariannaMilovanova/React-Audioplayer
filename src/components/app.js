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
        const streamUrl = this.props.track || 'https://freemusicarchive.org/music/listen/00abd02b66d8cab168bee1d464c811e43667d1ff';
        console.log(this.props.track)
        return (
            <div>
                <AudioPlayer streamUrl={streamUrl} />
                <AudioList music={this.props.music} chooseTrack={this.props.chooseTrack}/>
            </div>
        );
    }
}

function  mapStateToProps(state) {
  return { music: state.music, track: state.music.track  }

}
export default connect(mapStateToProps, { fetchMusic, chooseTrack })(App);