import axios from 'axios'

const address = process.env.REACT_APP_API_ENDPOINT

export const doLoadSalespersons = () => {
    return new  Promise(function(resolve, reject){
        axios.get(address + '/salesperson', {})
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doLoadBookings = () => {
    return new  Promise(function(resolve, reject){
        axios.get(address + '/bookings', {})
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doLoadGlobalSetting = () => {
    return new  Promise(function(resolve, reject){
        axios.get(address + '/general', {})
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doUpdateGlobalSetting = (g_setting) => {
    return new  Promise(function(resolve, reject){
        axios.put(address + '/general/' + g_setting.g_pk, g_setting)
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doAddSalesperson = (salesperson) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/salesperson', {
            name: salesperson.name,
            email: salesperson.email,
            phone: salesperson.phone,
            s_address: salesperson.s_address,
            f_address: salesperson.f_address
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doDeleteSalesperson = (sp_pk) => {
    return new  Promise(function(resolve, reject){
        axios.delete(address + '/salesperson/' + sp_pk, {
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doFindTopClosestAddress = (latitude, longitude) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/bookings/closest', {
            latitude: latitude,
            longitude: longitude,
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doSuggest3DateTime = (group_key) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/bookings/suggest3', {
            group_key
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

export const doPostbooking = (booking) => {
    return new  Promise(function(resolve, reject){
        axios.post(address + '/bookings', {
            full_name: booking.full_name,
            email: booking.email,
            phone: booking.phone,
            pick_time: booking.pick_time,
            address_name: booking.address_name,
            latitude: booking.latitude,
            longitude: booking.longitude,
            group_key: booking.group_key
        })
        .then(response => {
            resolve(response.data.success)

        })
        .catch(error => {
            reject(error)
        })
    })
    
}

