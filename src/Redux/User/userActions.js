import axios from 'axios';
import { UserActionTypes } from './userTypes'

export const changeImage = (user) => ({
    type: UserActionTypes.USER_IMAGE_CHANGE,
    payload: user
})

const followUser = (id) => async dispatch => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_from: id, user_to: id })
    }
    fetch('https://tweeeeeter.herokuapp.com/followers/', requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log('success', data)
            // enqueueSnackbar('WELCOME BROO')
        })
}

export const load_user = () => async dispatch => {

    if (localStorage.getItem('access')) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }
        const res = await fetch(`https://tweeeeeter.herokuapp.com/auth/users/me/`, requestOptions)
        const data = await res.json()
        // console.log(data)
        if (data.id) {
            dispatch({
                type: UserActionTypes.USER_LOADED_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: UserActionTypes.USER_LOADED_FAIL
            })
        }
        // console.log(err)
    }
    else {
        dispatch({
            type: UserActionTypes.USER_LOADED_FAIL
        })
    }
}
export const login = (email, password) => async dispatch => {
    // console.log('here')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post(`https://tweeeeeter.herokuapp.com/auth/jwt/create/`, body, config)
        dispatch({
            type: UserActionTypes.LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(load_user())
    } catch (err) {
        dispatch({
            type: UserActionTypes.LOGIN_FAIL
        })
    }
}

export const register = (name, email, password, image) => async dispatch => {
    // console.log('clicked')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password, image })
    try {
        const res = await axios.post(`https://tweeeeeter.herokuapp.com/auth/users/`, body, config)
        console.log(res)
        dispatch(followUser(res.data.id))
        dispatch(login(email, password))
    } catch (err) {
        dispatch({
            type: UserActionTypes.LOGIN_FAIL
        })
    }
}
