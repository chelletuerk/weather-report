import { connect } from 'react-redux'
import { fetchSearchedWeather } from '../actions'
import WeatherIndex from '../components/WeatherIndex'

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = {
  fetchSearchedWeather,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIndex)
