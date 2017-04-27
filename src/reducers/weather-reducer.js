const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_WEATHER':
      return Object.assign({}, state, { searchedMovies: action.payload.results })
    default:
      return state
  }
}

export default weather
