/**
 * Device Sagas
 */
import { all, call, put, takeEvery, take } from 'redux-saga/effects';
import {history} from '../history'
import moment from "moment";
import {
    FIND_TOP_ADDRESS,
    FIND_TOP_ADDRESS_SUCCESS,
    FIND_TOP_ADDRESS_FAILURE,
    LOAD_GLOBAL_SETTING,
    LOAD_GLOBAL_SETTING_SUCCESS,
    LOAD_GLOBAL_SETTING_FAILURE,
    LOAD_SALES_PERSONS,
    LOAD_SALES_PERSONS_SUCCESS,
    LOAD_SALES_PERSONS_FAILURE,
    UPDATE_SETTING_SUCCESS,
    UPDATE_SETTING_FAILURE,
    UPDATE_SETTING,
    ADD_SALES_PERSON,
    ADD_SALES_PERSON_SUCCESS,
    ADD_SALES_PERSON_FAILURE,
    DELETE_SALES_PERSON,
    DELETE_SALES_PERSON_SUCCESS,
    DELETE_SALES_PERSON_FAILURE,
    SUGGEST3_DATETIME,
    SUGGEST3_DATETIME_SUCCESS,
    SUGGEST3_DATETIME_FAILURE,
    POST_BOOKING_SUCCESS,
    POST_BOOKING_FAILURE,
    POST_BOOKING,
    CLEAR_TOP_ADDRESS,
    LOAD_BOOKING_SUCCESS,
    LOAD_BOOKING_FAILURE,
    LOAD_BOOKING_REQUEST,

} from 'Actions/types';

import {
    doLoadGlobalSetting,
    doAddSalesperson,
    doLoadSalespersons,
    doDeleteSalesperson,
    doFindTopClosestAddress,
    doSuggest3DateTime,
    doPostbooking,
    doUpdateGlobalSetting,
    doLoadBookings,
} from 'api/Data'

import {oneWeekAvailableDateTime, suggest3AvailableDateTime} from 'Util/DateTime'

function* findTopClosestAddress({ payload }) {
    try {
        
        const data = yield call(doFindTopClosestAddress, payload.latitude, payload.longitude, 5)
        yield all ([
            yield put( {type: FIND_TOP_ADDRESS_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: FIND_TOP_ADDRESS_FAILURE, payload: message})
    }
}

function* loadGlobalSetting() {
    try {
        const data = yield call(doLoadGlobalSetting)
        console.log(JSON.stringify(data))
        yield all ([
            yield put( {type: LOAD_GLOBAL_SETTING_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_GLOBAL_SETTING_FAILURE, payload: message})
    }
}

function* updateGlobalSetting({ payload }) {
    try {
        const data = yield call(doUpdateGlobalSetting, payload.g_setting)
        yield all ([
            yield put( {type: UPDATE_SETTING_SUCCESS, payload:{data}}),
            yield put( {type: LOAD_GLOBAL_SETTING, payload:{}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: UPDATE_SETTING_FAILURE, payload: message})
    }
}

function* loadSalespersons() {
    try {
        const data = yield call(doLoadSalespersons)
        yield all ([
            yield put( {type: LOAD_SALES_PERSONS_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_SALES_PERSONS_FAILURE, payload: message})
    }
}

function* loadBookings() {
    try {
        const data = yield call(doLoadBookings)

        let arraydata = [] 
        
        for (let j = 0; j < data.length; j ++) {
            let subitem = Object.values(data[j])
            subitem[4] = moment(subitem[4]).format('ddd, MM D YYYY, h:mm a')
            arraydata.push(subitem)
        }
    
        yield all ([
            yield put( {type: LOAD_BOOKING_SUCCESS, payload:{arraydata}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_BOOKING_FAILURE, payload: message})
    }
}

function* addSalesperson({ payload }) {
    try {
        const data = yield call(doAddSalesperson, payload.salesperson)
        yield all ([
            yield put( {type: ADD_SALES_PERSON_SUCCESS, payload:{data}}),
            yield put( {type: LOAD_SALES_PERSONS, payload:{}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: ADD_SALES_PERSON_FAILURE, payload: message})
    }
}

function* deleteSalesperson({ payload }) {
    try {
        const data = yield call(doDeleteSalesperson, payload.sp_pk)
        yield all ([
            yield put( {type: DELETE_SALES_PERSON_SUCCESS, payload:{data}}),
            yield put( {type: LOAD_SALES_PERSONS, payload:{}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: DELETE_SALES_PERSON_FAILURE, payload: message})
    }
}

function* suggest3DateTime({ payload }) {
    try {
        const data = yield call(doSuggest3DateTime, payload.group_key)

        let oneweekAvailableDateTime = oneWeekAvailableDateTime(data)
        let suggestDates = suggest3AvailableDateTime(oneweekAvailableDateTime)
        console.log(JSON.stringify(oneweekAvailableDateTime))
        console.log(JSON.stringify(suggestDates))
        yield all ([
            yield put( {type: SUGGEST3_DATETIME_SUCCESS, payload:{oneweekAvailableDateTime, suggestDates}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: SUGGEST3_DATETIME_FAILURE, payload: message})
    }
}

function* postbooking({ payload }) {
    try {
        const data = yield call(doPostbooking, payload.booking)

        console.log(JSON.stringify(data))
        yield all ([
            yield put( {type: POST_BOOKING_SUCCESS, payload:{data}}),
            yield put( {type: CLEAR_TOP_ADDRESS, payload:{}}),
            history.goBack()
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: POST_BOOKING_FAILURE, payload: message})
    }
}


/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        takeEvery(FIND_TOP_ADDRESS, findTopClosestAddress),
        takeEvery(LOAD_BOOKING_REQUEST, loadBookings),
        takeEvery(LOAD_GLOBAL_SETTING, loadGlobalSetting),
        takeEvery(UPDATE_SETTING, updateGlobalSetting),
        takeEvery(LOAD_SALES_PERSONS, loadSalespersons),
        takeEvery(ADD_SALES_PERSON, addSalesperson),
        takeEvery(DELETE_SALES_PERSON, deleteSalesperson),
        takeEvery(SUGGEST3_DATETIME, suggest3DateTime),
        takeEvery(POST_BOOKING, postbooking)
    ]);
}
