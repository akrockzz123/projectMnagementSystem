

import { Action } from "../action"

import { courseActionType } from "../action-types"



type cvb = {

    project_id : any,
    name: string,
    assignee_id: string,
    status: string,
    Users: any
  }

  const user0: cvb = {

    project_id : "",
    name : "",
    assignee_id:"",
    status: "",
    Users : ""

  }

type courseState = {

    course_id : string,

    course_name : string,

    success: boolean,

    error: any,


    loading : boolean,

    course_id_to_delete: string,

    course_id_to_delete_loading: boolean,

    course_id_to_delete_success: boolean,

    course_id_to_delete_error: boolean,

    success_delete_from_user: boolean,

    user_id_from_to_delete: string,

    loading_delete_from_user: boolean,


    error_delete_from_user: {},

    course_not_assign : [cvb],

    course_not_assign_loading : boolean,

    course_not_assign_success : boolean,

    course_not_assign_error : {}
}

const initialState : courseState = {
    course_id: '',

    course_name: '',

    success: false,



    loading: true,

    error: null,

    course_id_to_delete: '',



    course_id_to_delete_success: false,

    course_id_to_delete_loading: false,

    course_id_to_delete_error: false,

    success_delete_from_user: false,

    user_id_from_to_delete: '',

    loading_delete_from_user: true,


    error_delete_from_user: {},

    course_not_assign_loading: true,

    course_not_assign_success: false,

    course_not_assign_error: false,
    course_not_assign: [user0]
}






export const courseNotAssignReducer = (_state: courseState = initialState, action : Action) => {

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
        break;

        case courseActionType.COURSE_DELETE_FROM_USER_REQUEST :
            return {
                ..._state,

                loading_delete_from_user: true,

                user_id_from_to_delete: action.payload.user,

                course_id_to_delete: action.payload.course


            }
        break;

        case courseActionType.COURSE_DELETE_FROM_USER_SUCCESS:
            return {

                ..._state,

                loading_delete_from_user: false,
                succes_delete_from_user: true

            }
        break;

        case courseActionType.COURSE_DELETE_FROM_USER_FAIL:
            return {

                ..._state,

                loading_delete_from_user: false,

                success_delete_from_user: false,

                error_delete_from_user: action.payload
            }
        break;

        case courseActionType.COURSE_DELETE_REQUEST:
            
            return {

                ..._state,

                course_id_to_delete_loading: true,

                course_id_to_delete_success: false,

            }
        break;

        case courseActionType.COURSE_DELETE_SUCCESS:
            return {
                ..._state,

                course_id_to_delete_loading: false,

                course_id_to_delete_success: true
            }
        break;

        case courseActionType.COURSE_DELETE_FAIL:
            return {
                ..._state,

                course_id_to_delete_loading: false,
                course_id_to_delete_success: false,
                course_id_to_delete_error:true

            }
        break;

        case courseActionType.COURSE_NOT_ASSIGN_REQUEST :
            return {
                ..._state,

                course_not_assign_loading: true
            }

        break;

        case courseActionType.COURSE_NOT_ASSIGN_SUCCESS :
            return {

                ..._state,

                course_not_assign_loading: false,

                course_not_assign_success : true,

                course_not_assign : action.payload
            }
        break;

        case courseActionType.COURSE_NOT_ASSIGN_FAIL :
            return {
                ..._state,

                course_not_assign_loading: false,

                course_not_assign_error : true
            }
        break;

        default : 
        return initialState


    }


}

