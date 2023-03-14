import { Action } from "../action"
import { userActionType } from "../action-types"

type userstate = {

    username: string,

    email: string,

    password : string,

    loading: boolean,

    success: boolean,

    role : string,
    error: {}
}

const initialState : userstate = {

    username: "",

    email: "",

    password: "",

    loading: true,

    success: false,

    role : "",

    error: {}
}

export const userSignupReducers = (_state: userstate = initialState, action : Action) => {

    switch (action.type) {

        case userActionType.USER_SIGNUP_REQUEST:
            return {

                ..._state,
                
                username : action.payload.userame,

                email : action.payload.email,

                password: action.payload.password,
                
                loading: true,

                role : action.payload.role


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