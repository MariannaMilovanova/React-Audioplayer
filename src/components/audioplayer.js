import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

const AWSSoundPlayer = withCustomAudio(props => {
  return (
    <div>
      <PlayButton {...props} />
      <h2>{props.track.track_title}</h2>
      <Timer {...props} />
    </div>
  );
});

export default AWSSoundPlayer;
