import { connect } from 'react-redux'
import { fetchSearchedCity } from '../actions'
import WeatherIndex from '../components/WeatherIndex'

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    searchedCity: state.weather.name,
    weatherConditions: state.weather.weather
  }
}

const mapDispatchToProps = {
  fetchSearchedCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIndex)
