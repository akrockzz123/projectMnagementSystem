


import { Action } from "../action"
import { userActionType } from "../action-types"


type userstate = {

    email: string,

    password : string,

    loading: boolean,

    success: boolean,

    error: {},
    users : [],

    usersLoading : boolean,

    successUsers : boolean,

    errorusers : boolean
}

const initialState : userstate = {

    email: "",

    password: "",

    loading: true,

    success: false,

    error: {},

    users : [],

    usersLoading : true,

    successUsers : false,

    errorusers : false


}

type usersState = {

    users : [],

    usersLoading : boolean,

    successUsers : boolean,

    errorusers : boolean
}

const initialState2 : usersState = {

    users : [],

    usersLoading : true,

    successUsers : false,

    errorusers : false

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

        case userActionType.USERS_LIST_REQUEST :
            return {
                usersLoading : true
            }
        break;
        case userActionType.USERS_LIST_SUCCESS :
            return {

                usersLoading : false,

                users : action.payload,

                successUsers : true
            }
        break;

        case userActionType.USERS_LIST_FAIL :
            return {
                
                errorusers : true
            }
        break;

       
        

    }
}


/*export const usersListReducer = (_state : usersState = initialState2,action : Action) => {

    switch(action.type) {

        case userActionType.USERS_LIST_REQUEST :
            return {
                usersLoading : true
            }
        break;
        case userActionType.USERS_LIST_SUCCESS :
            return {

                usersLoading : false,

                users : action.payload,

                successUsers : true
            }
        break;

        case userActionType.USERS_LIST_FAIL :
            return {
                
                errorusers : true
            }
        break;

        
    }
}*/