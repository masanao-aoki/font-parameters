'use strict';

import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory, hashhistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
import { textToArray } from './middleware/convert'

import App from './container/App'
import Home from './container/Home'

const reducer = combineReducers({
	...reducers,
	routing: routerReducer
})

const store = createStore(
	reducer,
	applyMiddleware(textToArray)
)

const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
