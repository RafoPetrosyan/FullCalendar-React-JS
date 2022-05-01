import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_DATA, SET_DATA } from '../actions/actionTypes';
import { createAction } from '../actions/createAction';
import { getData } from '../api/calendarApi';

function* workerGetData(action){
    try {
        const { data } = yield call(getData, action.payload);
        yield put(createAction(SET_DATA, data));
    } catch (error) {
        console.log('saga', error);
    }
}

export function* watcherCalendar(){
    yield takeEvery(GET_DATA, workerGetData)
}