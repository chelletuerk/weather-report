import moment from 'moment'

const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCHED_CITY':
    const timeFetched = moment().format('MMMM Do YYYY, h:mm:ss a')

    const newCityObject = Object.assign({}, action.payload, { timeFetched })

      return Object.assign({}, state, {
        currentHistory: [...state.currentHistory, newCityObject],
        searchedCity: newCityObject,
      })
    default:
      return state
  }
}

export default weather
