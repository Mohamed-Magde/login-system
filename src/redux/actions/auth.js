import axios from 'axios'
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types'

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    await axios.get('https://api.train-time.com/#/User%20Auth/emailTokenCheck')
  }
  try {
    const res = await axios.get(
      'https://api.train-time.com/#/User%20Sport%20Events/findEvents'
    )

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

//login
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  const body = JSON.stringify({ email, password })
  try {
    const res = await axios.post(
      'https://api.train-time.com/#/User%20Auth/login',
      body,
      config
    )
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(loadUser())
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
}

//logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
