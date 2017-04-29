import fetch from 'isomorphic-fetch'

export const displaySearchedCity = (query, payload) => {
  return {
    type: 'SEARCHED_CITY',
    query,
    payload,
  }
}

export const fetchSearchedCity = (query) => {
  const baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
  const cityQuery = `q=${query}&APPID=d301cab0809df8243cc8fc745840ee21&units=imperial`

  return (dispatch) => {
    fetch(baseUrl + cityQuery)
      .then(response => response.json())
      .then((data) => {
        if (data.cod === '404') {
          alert('City Not Found')
          return null
        }
        dispatch(displaySearchedCity(query, data))
      })
      .catch(err => 'err')
  }
}
