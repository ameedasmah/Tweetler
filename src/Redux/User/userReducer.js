import { UserActionTypes } from './userTypes'

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    image: ''
};
const userReducer = function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UserActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return {
                ...state,
                access: payload.access,
                refresh: payload.refresh,

            }
        case UserActionTypes.USER_LOADED_SUCCESS:
            localStorage.setItem('id', payload.id)
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                image: payload.image
            }
        case UserActionTypes.USER_LOADED_FAIL:
            // localStorage.removeItem('access')
            return {
                ...state,
                isAuthenticated: null,
                user: null
            }
        case UserActionTypes.LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            alert('are you trying to hack me ? ')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        case UserActionTypes.USER_IMAGE_CHANGE:
            return {
                ...state,
                image: payload.image
            }
        default:
            return state
    }
}
export default userReducer 