import { connect } from 'react-redux'
import { fetchData } from '../actions'
import WeatherIndex from '../components/WeatherIndex'

const mapStateToProps = (state) => {
  return { weather: state.weather }
}

const mapDispatchToProps = {
  fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIndex)
