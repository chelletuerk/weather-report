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
            This is on the screen all the time: <li>{city.name}</li>
            So is this: {this.displayCurrentCondition(city)}
            And so it this:{<li>{city.main.temp}</li>}
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
          <h1>HISTORY</h1>
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
        <div>{this.loadWeather(this.props.weather.searchedCity)}</div>
        {this.displayCurrentHistory()}
      </div>
    )
  }
}
