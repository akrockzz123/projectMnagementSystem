import { Dispatch } from "react"
import { Action } from "../action"


import { courseActionType, userActionType } from "../action-types"

export const userLoginRequestAction: any= (email : string, password: string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_LOGIN_REQUEST,

            payload : {email : email, password: password}
      })
    }
}

export const userLoginSuccessAction: any= (dispatch: Dispatch<Action>) => {

    //return (dispatch: Dispatch<Action>) => {

    console.log("login success action")
        dispatch({

            type: userActionType.USER_LOGIN_SUCCESS
        })
   // }
}

export const userLoginFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_LOGIN_FAIL
        })
    }
}





export const courseAssignRequestAction: any= (course_name : string,user_id : string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_REQUEST,

            payload : {courseName: course_name,userAssignId : user_id}
      })
    }
}

export const courseAssignSuccessAction: any= (dispatch: Dispatch<Action>) => {

    //return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_SUCCESS
        })
   // }
}

export const courseAssignFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_ASSIGN_FAIL
        })
    }
}


export const courseDeleteFromUserRequestAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_REQUEST,

            payload: {course_name,user_id}
        })
    }
}

export const courseDeleteFromUserSuccessAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_SUCCESS
        })
    }
}

export const courseDeleteFromUserFailAction: any= (course_name:string,user_id:string) => {


    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FROM_USER_FAIL
        })
    }
}
