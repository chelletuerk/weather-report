import fetch from 'isomorphic-fetch'
const key = require('../secret')

export const displaySearchedWeather = (query, payload) => {
  return {
    type: 'SEARCHED_WEATHER',
    query,
    payload,
  }
}

export const fetchSearchedWeather = (query) => {
  // const api_key = key.api_key
  const baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
  const cityQuery = `q=${query}&APPID=d301cab0809df8243cc8fc745840ee21`

  return (dispatch) => {
    fetch(`${baseUrl}${cityQuery}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(displaySearchedWeather(query, json))
    })
    .catch(err => 'err')
  }
}
