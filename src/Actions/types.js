/**
 * App Redux Action Types
 */

/**
 * Device Action
 */
export const FIND_TOP_ADDRESS = 'FIND_TOP_ADDRESS';
export const FIND_TOP_ADDRESS_SUCCESS = 'FIND_TOP_ADDRESS_SUCCESS';
export const FIND_TOP_ADDRESS_FAILURE = 'FIND_TOP_ADDRESS_FAILURE';

export const LOAD_GLOBAL_SETTING = 'LOAD_GLOBAL_SETTING'
export const LOAD_GLOBAL_SETTING_SUCCESS = 'LOAD_GLOBAL_SETTING_SUCCESS'
export const LOAD_GLOBAL_SETTING_FAILURE = 'LOAD_GLOBAL_SETTING_FAILURE'


export const LOAD_SALES_PERSONS = 'LOAD_SALES_PERSONS'
export const LOAD_SALES_PERSONS_SUCCESS = 'LOAD_SALES_PERSONS_SUCCESS'
export const LOAD_SALES_PERSONS_FAILURE = 'LOAD_SALES_PERSONS_FAILURE'

export const LOAD_BOOKING_REQUEST = 'LOAD_BOOKING_REQUEST'
export const LOAD_BOOKING_SUCCESS = 'LOAD_BOOKING_SUCCESS'
export const LOAD_BOOKING_FAILURE = 'LOAD_BOOKING_FAILURE'

export const ADD_SALES_PERSON = 'ADD_SALES_PERSON'
export const ADD_SALES_PERSON_SUCCESS = 'ADD_SALES_PERSON_SUCCESS'
export const ADD_SALES_PERSON_FAILURE = 'ADD_SALES_PERSON_FAILURE'

export const POST_BOOKING = 'POST_BOOKING'
export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS'
export const POST_BOOKING_FAILURE = 'POST_BOOKING_FAILURE'

export const SET_INIT_BOOKING = 'SET_INIT_BOOKING'

export const DELETE_SALES_PERSON = 'DELETE_SALES_PERSON'
export const DELETE_SALES_PERSON_SUCCESS = 'DELETE_SALES_PERSON_SUCCESS'
export const DELETE_SALES_PERSON_FAILURE = 'DELETE_SALES_PERSON_FAILURE'

export const SUGGEST3_DATETIME = 'SUGGEST3_DATETIME'
export const SUGGEST3_DATETIME_SUCCESS = 'SUGGEST3_DATETIME_SUCCESS'
export const SUGGEST3_DATETIME_FAILURE = 'SUGGEST3_DATETIME_FAILURE'

export const UPDATE_SETTING = 'UPDATE_SETTING'
export const UPDATE_SETTING_SUCCESS = 'UPDATE_SETTING_SUCCESS'
export const UPDATE_SETTING_FAILURE = 'UPDATE_SETTING_FAILURE'

export const CLEAR_TOP_ADDRESS = 'CLEAR_TOP_ADDRESS'

    
/* -----  ----- */
export const COLLAPSED_SIDEBAR = 'COLLAPSED_SIDEBAR';
export const DARK_MODE = 'DARK_MODE';
export const BOXED_LAYOUT = 'BOXED_LAYOUT';
export const RTL_LAYOUT = 'RTL_LAYOUT';
export const MINI_SIDEBAR = 'MINI_SIDEBAR';
export const SEARCH_FORM_ENABLE = 'SEARCH_FORM_ENABLE';
export const CHANGE_THEME_COLOR = 'CHANGE_THEME_COLOR';
export const TOGGLE_SIDEBAR_IMAGE = 'TOGGLE_SIDEBAR_IMAGE';
export const SET_SIDEBAR_IMAGE = 'SET_SIDEBAR_IMAGE';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const START_USER_TOUR = 'START_USER_TOUR';
export const STOP_USER_TOUR = 'STOP_USER_TOUR';
export const TOGGLE_DARK_SIDENAV = 'TOGGLE_DARK_SIDENAV';

// Sidebar
export const TOGGLE_MENU = 'TOGGLE_MENU';

// Agency Sidebar
export const AGENCY_TOGGLE_MENU = 'AGENCY_TOGGLE_MENU';
export const CHANGE_AGENCY_LAYOUT_BG = 'CHANGE_AGENCY_LAYOUT_BG';

// Auth Actions
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER';
export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER';
export const LOGIN_TWITTER_USER = 'LOGIN_TWITTER_USER';
export const LOGIN_GITHUB_USER = 'LOGIN_GITHUB_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE';

// Feedbacks
export const GET_FEEDBACKS = 'GET_FEEDBACKS';
export const GET_FEEDBACKS_SUCCESS = 'GET_FEEDBACKS_SUCCESS';
export const GET_FEEDBACKS_FAILURE = 'GET_FEEDBACKS_FAILURE';
export const GET_ALL_FEEDBACKS = 'GET_ALL_FEEDBACKS';
export const ON_CHANGE_FEEDBACK_PAGE_TABS = 'ON_CHANGE_FEEDBACK_PAGE_TABS';
export const MAKE_FAVORITE_FEEDBACK = 'MAKE_FAVORITE_FEEDBACK';
export const ON_DELETE_FEEDBACK = 'ON_DELETE_FEEDBACK';
export const VIEW_FEEDBACK_DETAILS = 'VIEW_FEEDBACK_DETAILS';
export const ADD_NEW_FEEDBACK = 'ADD_NEW_FEEDBACK';
export const SHOW_FEEDBACK_LOADING_INDICATOR = 'SHOW_FEEDBACK_LOADING_INDICATOR';
export const HIDE_FEEDBACK_LOADING_INDICATOR = 'HIDE_FEEDBACK_LOADING_INDICATOR';
export const NAVIGATE_TO_BACK = 'NAVIGATE_TO_BACK';
export const REPLY_FEEDBACK = 'REPLY_FEEDBACK';
export const SEND_REPLY = 'SEND_REPLY';
export const UPDATE_SEARCH_IDEA = 'UPDATE_SEARCH_IDEA';
export const ON_SEARCH_IDEA = 'ON_SEARCH_IDEA';
export const ON_COMMENT_FEEDBACK = 'ON_COMMENT_FEEDBACK';

// ecommerce
export const ON_DELETE_ITEM_FROM_CART = 'ON_DELETE_ITEM_FROM_CART';
export const ON_QUANTITY_CHANGE = 'ON_QUANTITY_CHANGE';
export const ON_ADD_ITEM_TO_CART = 'ON_ADD_ITEM_TO_CART';