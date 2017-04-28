const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_WEATHER':
      return Object.assign({}, state, {
        searchedWeather: action.payload.results,
       })
    default:
      return state
  }
}

export default weather
