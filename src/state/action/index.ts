








import { userActionType } from "../action-types"

import { courseActionType } from "../action-types"

type userinfo1 = {

    email : string

    password : string


   
    
}

type userinfo = {

    email : string

    password : string


    success : boolean

    //data : any

    
}


type successLogin = {

    success : boolean
}


interface userLoginRequest {

    type: userActionType.USER_LOGIN_REQUEST

    payload?: any

    
}

interface userLoginSuccess {

    type: userActionType.USER_LOGIN_SUCCESS

    payload?: any



   
}

interface userLoginFail {

    type: userActionType.USER_LOGIN_FAIL

    payload?: any
}


interface courseAssignRequest {

    type: courseActionType.COURSE_ASSIGN_REQUEST

    payload?: any

    
}

interface courseAssignSuccess {

    type: courseActionType.COURSE_ASSIGN_SUCCESS

    payload?: any



   
}

interface courseAssignFail {

    type: courseActionType.COURSE_ASSIGN_FAIL

    payload?: any
}

interface courseDeleteFromUserRequest {

    type: courseActionType.COURSE_DELETE_FROM_USER_REQUEST

    payload?: any
}

interface courseDeleteFromUserSuccess {

    type: courseActionType.COURSE_DELETE_FROM_USER_SUCCESS

    payload?: any
}

interface courseDeleteFromUserFail {

    type: courseActionType.COURSE_DELETE_FROM_USER_FAIL

    payload?: any
}


interface courseDeleteRequest {

    type: courseActionType.COURSE_DELETE_REQUEST

    payload?: any
}

interface courseDeleteSuccess {

    type: courseActionType.COURSE_DELETE_SUCCESS

    payload?: any
}

interface courseDeleteFail {

    type: courseActionType.COURSE_DELETE_FAIL

    payload?: any
}

interface usersListRequest {

    type: userActionType.USERS_LIST_REQUEST

    payload?: any
}

interface usersListSuccess{

    type: userActionType.USERS_LIST_SUCCESS

    payload?: any
}

interface usersListFail {

    type: userActionType.USERS_LIST_FAIL

    payload?: any
}








export type Action = userLoginRequest | userLoginSuccess | userLoginFail | courseAssignRequest | courseAssignSuccess | courseAssignFail | courseDeleteFromUserRequest | courseDeleteFromUserSuccess | courseDeleteFromUserFail | courseDeleteRequest | courseDeleteSuccess | courseDeleteFail | usersListRequest | usersListSuccess | usersListFail































































