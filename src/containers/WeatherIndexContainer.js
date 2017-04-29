import { connect } from 'react-redux'
import { fetchSearchedCity } from '../actions'
import WeatherIndex from '../components/WeatherIndex'

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    searchedCity: state.weather,
    currentHistory: state.weather.currentHistory
  }
}

const mapDispatchToProps = {
  fetchSearchedCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIndex)
