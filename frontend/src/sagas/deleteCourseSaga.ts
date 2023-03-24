export const courseDeleteFromUserReducer = (_state: courseState = initialState, action : Action) => {

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


}