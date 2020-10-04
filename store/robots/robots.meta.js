import { createAction } from 'redux-actions'

export const types = {
  GET_ROBOTS_REQUEST: 'GET_ROBOTS_REQUEST',
  GET_ROBOTS_SUCCESS: 'GET_ROBOTS_SUCCESS',
  GET_ROBOTS_ERROR: 'GET_ROBOTS_ERROR',

  SEARCH_CHANGE: 'SEARCH_CHANGE',
}

export const actionCreators = {
  getRobots: createAction(types.GET_ROBOTS_REQUEST),
  getRobotsSuccess: createAction(types.GET_ROBOTS_SUCCESS),
  getRobotsError: createAction(types.GET_ROBOTS_ERROR),

  searchChange: createAction(types.SEARCH_CHANGE),
}