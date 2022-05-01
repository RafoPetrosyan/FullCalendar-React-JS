import { SET_DATA } from "../actions/actionTypes";

const initialState = {
    calendarData: [],
}

export const calendarReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_DATA:
            return {
                ...state,
                calendarData: action.payload
            }

        default:
            return state;
    }
}