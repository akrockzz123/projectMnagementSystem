import { Action } from "../action"
import { userActionType } from "../action-types"

type userstate = {

    fullName: string,

    email: string,

    password : string,

    loading: boolean,

    success: boolean,

    error: {}
}

const initialState : userstate = {

    fullName: "",

    email: "",

    password: "",

    loading: true,

    success: false,

    error: {}
}

export const userSignupReducers = (_state: userstate = initialState, action : Action) => {

    switch (action.type) {

        case userActionType.USER_SIGNUP_REQUEST:
            return {

                ..._state,
                
                fullName : action.payload.fullName,

                email : action.payload.email,

                password: action.payload.password,
                
                loading: true
            }

        break;

        case userActionType.USER_SIGNUP_SUCCESS:
            return {

                ..._state,
                loading: false,
                success: true
                
            }

        break;

        case userActionType.USER_SIGNUP_FAIL:
            return {

                ..._state,
                loading: false,
                error: action.payload
                
            }

        break;

        default:
            return _state
    }
}