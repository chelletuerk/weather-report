import fetch from 'isomorphic-fetch'
const key = require('../secret')

export const displaySearchedWeather = (query, payload) => {
  return {
    type: 'SEARCHED_WEATHER',
    query,
    payload,
  }
}

const fetchSearchedWeather = (query) => {
  const api_key = key.api_key
  const baseUrl = `api.openweathermap.org/data/2.5/weather?`
  const cityQuery = `q=${query}&APPID=${api_key}`
  return (dispatch) => {
    fetch(`${baseUrl}${cityQuery}`)
    .then(response => response.json())
    .then((json) => {
      dispatch(displaySearchedWeather(query, json))
    })
    .catch(err => 'err')
  }
}

export const fetchData = (params) => {
  if (params.type === 'cityQuery') {
    return fetchSearchedWeather(params.query)
  }
}
