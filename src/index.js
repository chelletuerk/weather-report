import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import App from './App'
import weather from './reducers/weather-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

createStore(
  combineReducers({ weather }),
  {
    weather: {
      searchedWeather: [],
    },
  },
  composeEnhancers(applyMiddleware(thunk)),
)
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
