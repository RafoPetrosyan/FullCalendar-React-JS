import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DATA, SET_DATA, SET_ERROR_MESSAGE } from '../actions/actionTypes';
import { createAction } from '../actions/createAction';
import { getData } from '../api/calendarApi';

function* workerGetData(action){
    try {
        const { data } = yield call(getData, action.payload);
        yield put(createAction(SET_DATA, data));
    } catch (e) {
        yield put(createAction(SET_ERROR_MESSAGE, e.message));
    }
}

export function* watcherCalendar(){
    yield takeEvery(GET_DATA, workerGetData)
}