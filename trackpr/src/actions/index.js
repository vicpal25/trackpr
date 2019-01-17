import axios from 'axios';
import {
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_ACTIVITIES
} from './types';


const DEV_API = 'http://localhost:3090';

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export const signup = (formProps, callback) => async dispatch => {

  try {

    const response = await axios.post(DEV_API + '/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'EMAIL_IN_USE'
    })

  }

};
export const signin = (formProps, callback) => async dispatch => {

  try {

    const response = await axios.post('http://localhost:3090/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid Email Creds'
    })

  }

};

export const signout = (callback) => {

  localStorage.removeItem('token');

  callback();

  return {
    type: AUTH_USER,
    payload: ''
  }

}


export function fetchActivities(strava_id) {

  const response = axios.get(DEV_API + '/activities/' + strava_id);

  return {
    type: FETCH_ACTIVITIES,
    payload: response
  }

}