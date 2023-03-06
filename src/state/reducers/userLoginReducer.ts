


import { Action } from "../action"
import { userActionType } from "../action-types"


type userstate = {

    email: string,

    password : string,

    loading: boolean,

    success: boolean,

    error: {}
}

const initialState : userstate = {

    email: "",

    password: "",

    loading: true,

    success: false,

    error: {}
}



export const userLoginReducers = (_state: userstate = initialState, action : Action) => {

    switch (action.type) {

        case userActionType.USER_LOGIN_REQUEST:
            return {
                ..._state,
                
                email : action.payload.email,

                paswword: action.payload.password,
                
                loading: true
            }

        break;

        case userActionType.USER_LOGIN_SUCCESS:
            return {

                ..._state,
                loading: false,
                success: true
                
            }
        break;

        case userActionType.USER_LOGIN_FAIL:
            return {

                ..._state,

                loading: false,

                success: false

            }
        break;

        

    }
}