/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    FIND_TOP_ADDRESS,
    FIND_TOP_ADDRESS_SUCCESS,
    FIND_TOP_ADDRESS_FAILURE,
    LOAD_SALES_PERSONS_SUCCESS,
    LOAD_GLOBAL_SETTING_SUCCESS,
    LOAD_SALES_PERSONS_FAILURE,
    LOAD_GLOBAL_SETTING_FAILURE,
    CLEAR_TOP_ADDRESS,
    SUGGEST3_DATETIME_SUCCESS,
    SET_INIT_BOOKING,
    POST_BOOKING,
    POST_BOOKING_SUCCESS,
    POST_BOOKING_FAILURE,
} from 'Actions/types';
import { LOAD_BOOKING_SUCCESS } from '../Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    bookings: [],
    top3address: [],
    loading: false,
    salesperson: [],
    global:{},
    suggestDates: [],
    availableDateTime: [],
    initBooking: null,
    findAddress: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case FIND_TOP_ADDRESS:
            return { ...state, loading: true };

        case CLEAR_TOP_ADDRESS:
            return { ...state, loading: false, top3address: [], findAddress: false };

        case SET_INIT_BOOKING:
            return { ...state, loading: false, initBooking: action.payload.initBooking };

        case FIND_TOP_ADDRESS_SUCCESS:
            return { ...state, loading: false, top3address: action.payload.data, findAddress: true };

        case FIND_TOP_ADDRESS_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        case SUGGEST3_DATETIME_SUCCESS:
            return { ...state, loading: false, suggestDates: action.payload.suggestDates, availableDateTime: action.payload.oneweekAvailableDateTime };

        case LOAD_SALES_PERSONS_SUCCESS:
            return { ...state, loading: false, salesperson: action.payload.data };

        case LOAD_BOOKING_SUCCESS:
            return { ...state, loading: false, bookings: action.payload.arraydata };
            
        case LOAD_GLOBAL_SETTING_SUCCESS:
            return { ...state, loading: false, global: action.payload.data[0] };
        
        case LOAD_SALES_PERSONS_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };
        
        case LOAD_GLOBAL_SETTING_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        case POST_BOOKING:
            return { ...state, loading: true };
        case POST_BOOKING_SUCCESS:
            NotificationManager.info('Booking submitted successfully');
            return { ...state, loading: false };
        case POST_BOOKING_FAILURE:
            NotificationManager.error('Booking failed');
            return { ...state, loading: false };
            
            
        default: return { ...state };
    }
}
