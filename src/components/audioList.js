import React, { Component } from 'react';
import _ from 'lodash';


class AudioList extends Component {
    handleClick(track) {
        this.props.chooseTrack(track)
    }
    componentWillReciveProps(nextProps) {
        if (this.props.track!=nextProps.track) {
            this.forceUpdate();
        }
    }
    renderMusic() {
        return _.map(this.props.music.music, item => {
          return (
            <li className="list-group-item" key={item.track_id} onClick={()=>this.handleClick(item)}>
                <span className='artist-name'>{item.artist_name} - </span>
                <span className='track-title'>{item.track_title}</span>
                <span className='track-duration'>{item.track_duration}</span>
            </li>
          )
        })
      }
    render() {
        console.log(this.props.music.music)
        return (
          <div>
            <h3>Tracks</h3>
            <ul className="list-group">
              {this.renderMusic()}
            </ul>
          </div>
        );
    }
}


export default AudioList;