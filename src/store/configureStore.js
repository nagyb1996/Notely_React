import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
// import initialState from './initialState';

const loggerMiddleware = createLogger();

// Redux Dev Tools Extension for Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	{},
	composeEnhancers(
		applyMiddleware(
			apiMiddleware,
			thunkMiddleware,
			loggerMiddleware
		),
	),
);

function configureStore() {
	return store;
}

export default configureStore;