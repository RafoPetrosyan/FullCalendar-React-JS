import { SET_DATA, SET_ERROR_MESSAGE } from "../actions/actionTypes";

const initialState = {
    calendarData: null,
    errorMessage: '',
}

export const calendarReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_DATA:
            return {
                ...state,
                calendarData: action.payload
            }

        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;
    }
}