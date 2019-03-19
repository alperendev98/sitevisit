/**
 * Chat App Actions
 */
import {
    FIND_TOP_ADDRESS,
    FIND_TOP_ADDRESS_SUCCESS,
    FIND_TOP_ADDRESS_FAILURE,
    LOAD_GLOBAL_SETTING,
    LOAD_SALES_PERSONS,
    ADD_SALES_PERSON,
    DELETE_SALES_PERSON,
    UPDATE_SETTING,
    CLEAR_TOP_ADDRESS,
    SUGGEST3_DATETIME,
    POST_BOOKING,
    SET_INIT_BOOKING,
    LOAD_BOOKING_REQUEST,
} from './types';

/**
 * Redux Action To Device List
 */
export const findTopClosestAddress = (latitude, longitude) => ({
    type: FIND_TOP_ADDRESS,
    payload: { latitude, longitude }
})

export const findTopClosestAddressSuccess = () => ({
    type: FIND_TOP_ADDRESS_SUCCESS
})

export const findTopClosestAddressFailure = () => ({
    type: FIND_TOP_ADDRESS_FAILURE
})

export const suggest3DateTime = (group_key) => ({
    type: SUGGEST3_DATETIME,
    payload: { group_key }
})

export const postBook = (booking) => ({
    type: POST_BOOKING,
    payload: { booking }
})

export const loadGlobalSetting = () => ({
    type: LOAD_GLOBAL_SETTING,
    payload: { }
})

export const loadBookings = () => ({
    type: LOAD_BOOKING_REQUEST,
    payload: { }
})


export const loadSalespersons = () => ({
    type: LOAD_SALES_PERSONS,
    payload: { }
})

export const addSalesperson = (salesperson) => ({
    type: ADD_SALES_PERSON,
    payload: { salesperson }
})

export const deleteSalesperson = (sp_pk) => ({
    type: DELETE_SALES_PERSON,
    payload: { sp_pk }
})

export const updateGlobalSetting = (g_setting) => ({
    type: UPDATE_SETTING,
    payload: { g_setting }
})

export const clearTopAddress = () => ({
    type: CLEAR_TOP_ADDRESS,
})

export const setInitialBooking = (initBooking) => ({
    type: SET_INIT_BOOKING,
    payload: { initBooking }
})

    
