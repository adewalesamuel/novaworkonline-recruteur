import { Utils } from '../utils';

const HOST = 'http://127.0.0.1';
const PORT = '8000';
const URL = process.env.REACT_APP_HOST ?? `${HOST}:${PORT}`;
const ROOT_PATH  = '/api' 
const HEADERS = new Headers({
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'Connection': 'keep-alive',
    'Authorization': `Bearer ${Utils.Auth.getSessionToken()}`
});
const FORMDATA_HEADERS = new Headers({
    'Accept': 'application/json',
    'Authorization': `Bearer ${Utils.Auth.getSessionToken()}`
});

const get = (endpoint, signal=new AbortController().signal) => {
    return new Promise((resolve, reject) => {
        fetch(`${URL}${ROOT_PATH}/${endpoint}`, {
            headers:HEADERS,
            signal
        })
        .then(response => {
            if (!response.ok) {
                return reject({
                    status: response.status,
                    messages: getResponseErrors(response)
                    });
            }

            return response.json();
        })
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error))
    })
}

const post = (endpoint, payload='', signal=new AbortController().signal) => {
    return new Promise((resolve, reject) => {
        fetch(`${URL}${ROOT_PATH}/${endpoint}`,
        {
            method:'post', 
            headers:HEADERS, 
            body:payload,
            signal
        })
        .then(response => {
            if (!response.ok) {
                return reject({
                    status: response.status,
                    messages: getResponseErrors(response)
                    });
            }

            return response.json();
        })
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error))
    })
}
const postFormData = (endpoint, payload='', signal=new AbortController().signal) => {
    return new Promise((resolve, reject) => {
        fetch(`${URL}${ROOT_PATH}/${endpoint}`,
        {
            method:'post', 
            headers:FORMDATA_HEADERS, 
            body:payload,
            signal
        })
        .then(response => {
            if (!response.ok) {
                return reject({
                    status: response.status,
                    messages: getResponseErrors(response)
                    });
            }

            return response.json();
        })
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error))
    })
}

const put = (endpoint, payload='', signal=new AbortController().signal) => {
    return new Promise((resolve, reject) => {
        fetch(`${URL}${ROOT_PATH}/${endpoint}`,
        {
            method:'put', 
            headers:HEADERS, 
            body:payload,
            signal
        })
        .then(response => {
            if (!response.ok) {
                return reject({
                    status: response.status,
                    messages: getResponseErrors(response)
                    });
            } 

            return response.json();
        })
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error))
    })
}

const erase = (endpoint, signal=new AbortController().signal) => {
    return new Promise((resolve, reject) => {
        fetch(`${URL}${ROOT_PATH}/${endpoint}`,
        {
            method:'delete', 
            headers:HEADERS, 
            signal
        })
        .then(response => {
            if (!response.ok) {
                return reject({
                    status: response.status,
                    messages: getResponseErrors(response)
                    });
            }

            return response.json();
        })
        .then(result => {
            resolve(result)
        })
        .catch(error => reject(error))
    })
}

const getResponseErrors = response => {
    return new Promise((resolve, reject) => {
        if (!response) reject(null);
        
        response.json().then(result => {
            let errorMessages = [];
            
            errorMessages.push(result.message);
    
            for (let error in result.errors) 
                errorMessages.push(result.errors[error]);

            resolve(errorMessages);
        });    
    })
}

export const Api = {
    get,
    post,
    put,
    erase,
    postFormData
}