import React, { Component } from 'react'
import Button from './Button'

export default class WeatherIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryInput: '',
      display: [],
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSearch(e) {
    this.setState({queryInput: e.target.value}, () => {
      this.setState({display: []})
    })
  }

  handleClick() {
    this.props.fetchSearchedCity(this.state.queryInput)
    this.setState({queryInput: ''})
    this.loadWeather()
  }

  loadWeather() {
      let tempArray = []
      if(this.props.weather.searchedCity) {
      this.props.weather.searchedCity.map((e, i) => {
        tempArray.push(
          <ul key={ i }>
            <li>
              <h1>{ e.name }</h1>
            </li>
          </ul>
        )
      })}
      return tempArray;
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
              className='submitButton'
          />
          <ul>{this.loadWeather()}</ul>
      </div>
    )
  }
}
