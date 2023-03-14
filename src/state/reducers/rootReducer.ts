

import { combineReducers } from 'redux'
import { courseAssignReducer} from './courseAssignReducer'
import { userLoginReducers } from './userLoginReducer'

import { userSignupReducers } from './userSignupReducer'
//import { usersListReducer } from './userLoginReducer'

import { courseNotAssignReducer } from './courseNotAssignReducer'
import { courseAddReducer } from './courseAddReducer'
import { alertReducer } from './AlertReducer'
import { userUpdateAdminReducers } from './userUpdateAdmin'

export const reducer = combineReducers({

    courseReducer : courseAssignReducer,

    courseNotAssignReducer : courseNotAssignReducer,
    usersReducer : userLoginReducers,

    userSignup: userSignupReducers,

    courseAddReducer : courseAddReducer,

    alertReducer : alertReducer,

    userUpdateAdminReducer : userUpdateAdminReducers

})