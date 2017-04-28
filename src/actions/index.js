import fetch from 'isomorphic-fetch'
// const key = require('../secret')

export const displaySearchedCity = (query, payload) => {
  return {
    type: 'SEARCHED_CITY',
    query,
    payload,
  }
}

export const displayWeatherConditions = (query, payload) => {
  return {
    type: 'WEATHER_CONDITIONS',
    query,
    payload,
  }
}

export const fetchSearchedCity = (query) => {
  // const api_key = key.api_key
  const baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
  const cityQuery = `q=${query}&APPID=d301cab0809df8243cc8fc745840ee21`

  return (dispatch) => {
    fetch(`${baseUrl}${cityQuery}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(displaySearchedCity(query, json))
      console.log(json);
    })
    .catch(err => 'err')
  }
}
