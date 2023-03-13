import { Dispatch } from "react"
import { Action } from "../action"


import { courseActionType, userActionType} from "../action-types"

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



export const courseDeleteRequestAction: any= (course_id : string) => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_REQUEST,

            payload : {course_id}
      })
    }
}

export const courseDeleteSuccessAction: any= (dispatch: Dispatch<Action>) => {

    //return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_SUCCESS
        })
   // }
}

export const courseDeleteFailAction: any= () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: courseActionType.COURSE_DELETE_FAIL
        })
    }
}

export const UsersListRequestAction : any = () => {

    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USERS_LIST_REQUEST
        })
    }
}

export const UsersListSuccessAction : any = (users : []) => {

    return (dispath : Dispatch<Action>) => {

        dispath({

            type: userActionType.USERS_LIST_SUCCESS,

            payload : users
        })
    }
}

export const UsersListErrorAction : any = () => {

    return (dispath : Dispatch<Action>) => {

        dispath({

            type: userActionType.USERS_LIST_FAIL
        })
    }
}

//signup
export const userSignupRequestAction: any= (username : string, email : string, password: string, role : string) => {
    return (dispatch: Dispatch<Action>) => {

        dispatch({

            type: userActionType.USER_SIGNUP_REQUEST,
            payload : {
                username : username, 
                email : email, 
                password: password,
                role : role
            }
      })
    }
}

export const userSignupSuccessAction: any= (dispatch: Dispatch<Action>) => {
    //return (dispatch: Dispatch<Action>) => {
        dispatch({

            type: userActionType.USER_SIGNUP_SUCCESS
        })
    }


export const userSignupFailAction: any= () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
                
                type: userActionType.USER_SIGNUP_FAIL
            })
        }
    }


    export const NotActiveProjectRequest : any = () => {
        return (dispatch: Dispatch<Action>) => {
            dispatch({
                    
                    type: courseActionType.COURSE_NOT_ASSIGN_REQUEST
                })
            }
        }

        export const NotActiveProjectSuccess : any = (notactiveprojects : []) => {
            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.COURSE_NOT_ASSIGN_SUCCESS,

                        payload : notactiveprojects
                    })
                }
            }

            
        export const NotActiveProjectFail : any = () => {
            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.COURSE_NOT_ASSIGN_FAIL
                    })
                }
            }

        // project assign reducers
            
        export const AssignProjectRequest : any = (userid : string,courseid : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_REQUEST,

                        payload : {userid,courseid}
                    })
                }
        }

        export const AssignProjectRequestFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_FAIL
                    })
                }

        }

        export const AssignProjectRequestSuccess : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: userActionType.ASSIGN_PROJECT_SUCCESS
                    })
                }

        }

        export const courseAddRequestAction : any = (name : string,assignee_id : string) => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_REQUEST,

                        payload : {name, assignee_id}
                    })
                }
        }

        export const courseAddRequestSuccess : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_SUCCESS
                    })
                }
        }

        
        export const courseAddRequestFail : any = () => {

            return (dispatch: Dispatch<Action>) => {
                dispatch({
                        
                        type: courseActionType.ADD_PROJECT_FAIL
                    })
                }
        }
        
        


    // get projects of user 


   


