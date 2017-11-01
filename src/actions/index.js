import axios from 'axios';

export function fetchMusic() {
    const request = axios.get(`https://freemusicarchive.org/recent.json`);
        return {
            type: 'GET_FRESH_MUSIC',
            payload: request
    };
}

export function chooseTrack(url) {
        return {
            type: 'CHOOSE_TRACK',
            url
    };
}