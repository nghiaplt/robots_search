import { handleActions } from 'redux-actions';
import { types } from './robots.meta';

const initialState = {
  robots: [],
  search: '',
  error: null,
}

const getRobotsSuccess = (state, action) => ({
  ...state,
  robots: action.payload
})

const getRobotsError = (state, action) => ({
  ...state,
  error: action.payload
})

const searchChange = (state, action) => ({
    ...state,
    search: action.payload
})

export default handleActions(
  {
    [types.GET_ROBOTS_SUCCESS]: getRobotsSuccess,
    [types.GET_ROBOTS_ERROR]: getRobotsError,
    [types.SEARCH_CHANGE]: searchChange,
  },
  initialState
);