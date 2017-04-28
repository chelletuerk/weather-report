const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_CITY':
      return Object.assign({}, state, {
        searchedCity: action.payload.name,
       })
    case 'WEATHER_CONDITIONS':
    return Object.assign({}, state, {
      weatherConditions: action.payload.weather[0].description
    })
    default:
      return state
  }
}

export default weather
