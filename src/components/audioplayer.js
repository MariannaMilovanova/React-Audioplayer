import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'https://s3-eu-west-1.amazonaws.com/react-soundplayer-examples/ksmtk-reborn-edit.mp3';

const AWSSoundPlayer = withCustomAudio(props => {

const { trackTitle } = props;
  return (
    <div>
      <PlayButton {...props} />
      <h2>TrackTitle</h2>
      <Timer {...props} />
    </div>
  );
});

export default AWSSoundPlayer;
