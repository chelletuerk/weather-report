import React, { Component } from 'react'
import WeatherIndex from './components/WeatherIndex'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Weather Report</h2>
        </div>
        <div className='body'>
        <WeatherIndex />
        </div>
      </div>
    )
  }
}

export default App;
