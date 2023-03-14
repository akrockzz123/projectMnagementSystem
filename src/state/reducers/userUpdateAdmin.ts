






import { Action } from "../action"
import { userActionType } from "../action-types"


type userstate = {

    loadingupdate: boolean,

    successupdate : boolean,

    errorupdate : boolean
}

const initialState : userstate = {

    loadingupdate : true,

    successupdate : false,

    errorupdate : false


}


export const userUpdateAdminReducers = (_state: userstate = initialState, action : Action) => {

    switch (action.type) {

        case userActionType.USER_UPDATE_ADMIN_REQUEST :
            return {
                ..._state,
                
               loadingupdate : true
            }

        break;

        case userActionType.USER_UPATE_ADMIN_SUCCESS:
            return {

                ..._state,
                loadingupdate: false,
                successupdate: true
                
            }
        break;

        case userActionType.USER_UPATE_ADMIN_FAIL:
            return {

                ..._state,

                loadingupdate: false,

                errrorupdate: true

            }
        break;

       

        default: 
        return initialState

       
        

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