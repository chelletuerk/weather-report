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
    this.setState({queryInput: e.target.value})
  }


  render() {
    const { fetchData } = this.props
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchData(this.state.queryInput)
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
