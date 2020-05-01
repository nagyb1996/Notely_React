import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import NoteEntryContainer from './components/NoteEntryContainer';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<NoteEntryContainer />
	</Provider>
);

export default App;