
import _ from "lodash"
import { Action } from "../action"
import { userActionType } from "../action-types"

type userinfoType = {

    loadinguserinfo : boolean,

    successuserinfo : boolean,

    erroruserinfo : boolean,

    usersData : {}
}

const userinfoState : userinfoType = {

    loadinguserinfo : true,

    successuserinfo : false,

    erroruserinfo : false,

    usersData : {}
}


export const userInfoReducer = (_state: userinfoType = userinfoState, action: Action) => {

    switch (action.type) {

        case userActionType.USER_INFO_REQUEST :
            return {
                ..._state,
                
                loadinguserinfo : true
            }
        break;

        case userActionType.USER_INFO_SUCCESS :
            return {
                ..._state,
                
                loadinguserinfo : false,

                successuserinfo : true,
                usersData : action.payload
            }
        break;

        

        default:
            return userinfoState
        }
    }



