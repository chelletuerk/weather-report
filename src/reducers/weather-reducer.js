const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_CITY':
      return Object.assign({}, state, {
        currentHistory: [...state.currentHistory, action.payload],
        searchedCity: action.payload,
      })
    default:
      return state
  }
}

export default weather
