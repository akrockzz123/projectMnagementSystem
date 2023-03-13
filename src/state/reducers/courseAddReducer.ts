



//import { Action } from "redux"

import { Action } from "../action"

import { courseActionType,userActionType } from "../action-types"



type addProjectState = {

    loadingAddCourse : boolean,

    errorAddCourse : boolean,

    successAddCourse : boolean
}

const initialState : addProjectState = {

    loadingAddCourse : true,

    errorAddCourse : false,

    successAddCourse : false

}




export const courseAssignReducer = (_state: addProjectState = initialState, action : Action) => {

    switch(action.type)
    {
        case userActionType.ASSIGN_PROJECT_REQUEST:
            return {
                ..._state,

                loadingAssign: true
            }
        break;


        case userActionType.ASSIGN_PROJECT_SUCCESS :
            return {
                ..._state,

                loadingAssign : false,

                successAssign: true
            }
        break;

        case userActionType.ASSIGN_PROJECT_FAIL:
            return {

                ..._state,

                successAssign: false,

                errorAssign: true
            }
        break;

        default : 
        return initialState


    }


}



/*export const courseDeleteFromUserReducer = (_state: courseState = initialState, action : Action) => {

    switch(action.type)
    {
        case courseActionType.COURSE_ASSIGN_REQUEST :
            return {
                ..._state,

                loading: true
            }
        break;


        case courseActionType.COURSE_ASSIGN_SUCCESS :
            return {
                ..._state,

                loading: false,

                success: true
            }
        break;

        case courseActionType.COURSE_ASSIGN_FAIL:
            return {

                ..._state,

                success: false,

                error: action.payload
            }
    }


}*/