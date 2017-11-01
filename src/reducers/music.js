function MusicReducer (state = {}, action) {
    switch (action.type) {
    case 'GET_FRESH_MUSIC':
        return {...state, music: action.payload.data.aTracks, track:action.payload.data.aTracks[0]};
    case 'CHOOSE_TRACK':
        return {...state, track: action.url, nextTrack: true};
    default:
        return state;
    }
}

export default MusicReducer;
