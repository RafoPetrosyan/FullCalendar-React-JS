import { createStore, combineReducers, applyMiddleware } from 'redux';
import { calendarReducer } from './reducers/calendarReducer';
import createSagaMiddleware from 'redux-saga';
import { watcherCalendar } from './sagas/calendarSagas';

const rootReducer = combineReducers({
    calendarData: calendarReducer,
})

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)

)

sagaMiddleware.run(watcherCalendar);
