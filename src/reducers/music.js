function MusicReducer (state = {}, action) {
    switch (action.type) {
    case 'GET_FRESH_MUSIC':
        return {...state, music: action.payload.data.aTracks};
    case 'CHOOSE_TRACK':
        return {...state, track: action.url};
    default:
        return state;
    }
}

export default MusicReducer;
