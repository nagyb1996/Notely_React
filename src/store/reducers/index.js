import { combineReducers } from 'redux';
import note from './note.reducer';

const rootReducer = combineReducers({
	note
});

export default rootReducer;