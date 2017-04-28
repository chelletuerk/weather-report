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
    this.props.fetchSearchedWeather(this.state.queryInput)
    this.setState({queryInput: ''})
  }

  render() {
    console.log(this);
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
      </div>
    )
  }
}
