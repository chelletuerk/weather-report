import React, { Component } from 'react'

export default class WeatherIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryInput: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    this.setState({queryInput: e.target.value}, () => {
      this.props.fetchSearchedWeather({ type: 'cityQuery', query: this.state.queryInput})
    })
  }

  render() {
    const { fetchSearchedWeather } = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchSearchedWeather(this.state.queryInput)
        }}>
          <input
            value={this.state.queryInput}
            onChange={this.handleSearch}
            placeholder='Enter City Name'
          />
        </form>
      </div>
    )
  }
}
