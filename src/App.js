import React, { Component } from 'react'
import WeatherIndexContainer from './containers/WeatherIndexContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Weather Report</h2>
        </div>
        <div className='body'>
        <WeatherIndexContainer />
        </div>
      </div>
    )
  }
}

export default App;
