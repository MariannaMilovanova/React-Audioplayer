import { combineReducers } from 'redux';
import MusicReducer from './music';

const rootReducer = combineReducers({
  music: MusicReducer
});

export default rootReducer;