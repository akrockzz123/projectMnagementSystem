

import { Action } from "../action";
import { alertActionType } from "../action-types";

type alertType = [

    {
        msg: string

        id: string
    }
]

const alertValue : alertType = [
    {
        msg : "",
        id : ""
    }]

export const alertReducer = (state : alertType = alertValue, action: Action) => {

    switch (action.type) {
        case alertActionType.SET_ALERT:
            return [...state,action.payload]
        break
        case alertActionType.REMOVE_ALERT:
            return state.filter(alert => alert.id === action.payload);
        break
        default:
            return state;
    }

}