

import { combineReducers } from 'redux'
import { courseAssignReducer} from './courseAssignReducer'
import { userLoginReducers } from './userLoginReducer'

//import { usersListReducer } from './userLoginReducer'

export const reducer = combineReducers({

    courseReducer : courseAssignReducer,

    usersReducer : userLoginReducers

})