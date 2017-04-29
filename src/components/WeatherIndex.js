import React, { Component } from 'react'
import Button from './Button'

const SHOW_HISTORY = 'Show Current History'
const HIDE_HISTORY = 'Hide Current History'

export default class WeatherIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      queryInput: '',
      displayHistory: false,
      displayCurrentHistoryText: SHOW_HISTORY,
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDisplayHistory = this.handleDisplayHistory.bind(this)
  }

  handleSearch({ target }) {
    this.setState({ queryInput: target.value })
  }

  handleClick() {
    this.props.fetchSearchedCity(this.state.queryInput)
    this.setState({ queryInput: '' })
  }

  displayCurrentCondition(city) {
    return (
      <li>{city.weather[0].description}</li>
    )
  }

  loadWeather(city) {
    const validCity = city.main && city.weather ? true : false

    return validCity
      ? (
        <div>
          <ul>
            <span>Current Conditions in <li className='city-title'>{city.name}</li></span>< br />
            Description: {this.displayCurrentCondition(city)}<br />
            Temperature: {<li>{city.main.temp} degrees</li>}<br />
            Date: {city.timeFetched}
          </ul>
        </div>
      )
      : (
        <div></div>
      )
  }

  handleDisplayHistory() {
    if (!this.state.displayHistory) {
      this.setState(
        { displayHistory: true, displayCurrentHistoryText: HIDE_HISTORY }
      )
    } else {
      this.setState(
        { displayHistory: false, displayCurrentHistoryText: SHOW_HISTORY  }
      )
    }
  }

  loadCurrentHistory() {
    return this.props.currentHistory.map((city, idx) => {
      return <div key={idx}>{this.loadWeather(city)}</div>
    })
  }

  displayCurrentHistory() {
    if (this.state.displayHistory) {
      return (
        <div>
          <h3>History</h3>
          {this.loadCurrentHistory()}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.queryInput}
          onChange={this.handleSearch}
          placeholder='Enter City Name'
        />
        <div className='buttons'>
        <Button
          text='Click for Current Weather'
          onClick={this.handleClick}
          className='submit-button'
        />
        <Button
          text={this.state.displayCurrentHistoryText}
          onClick={this.handleDisplayHistory}
          className='display-history'
        />
      </div>
        <div>{this.loadWeather(this.props.weather.searchedCity)}</div>
        {this.displayCurrentHistory()}
      </div>
    )
  }
}
