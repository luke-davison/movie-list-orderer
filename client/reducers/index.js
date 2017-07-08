import {CHECK_SOLUTION, ITEM_DRAGGED, CLOSE_INSTRUCTIONS, OPEN_INSTRUCTIONS} from '../actions'
import exampleData from '../../example-data.js'

const initialState = {
  movieList: exampleData,
  instructionsOpen: true,
  checkingSolution: false
}

function reducers (state = initialState, action) {
  switch (action.type) {
    case CHECK_SOLUTION:
      return Object.assign({}, state, {
        checkingSolution: true
      })
    case CLOSE_INSTRUCTIONS:
      return Object.assign({}, state, {
        instructionsOpen: false
      })
    case ITEM_DRAGGED:
      return state
    case OPEN_INSTRUCTIONS:
      return Object.assign({}, state, {
        instructionsOpen: true
      })
    default:
      return state
  }
}

export default reducers
