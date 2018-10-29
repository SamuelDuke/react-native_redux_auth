import axios from 'axios';
import { AsyncStorage } from "react-native";

export const AUTH_URL = 'http://54.69.223.221:8080/auth';
export const API_URL = 'http://54.69.223.221:8080/api';

export const getUserToken = async () => {
    let user = '';
    let token = '';
    try {
        user = await AsyncStorage.getItem('user') || 'none';

        token = JSON.parse(user).token;
        console.log('token', token);

    } catch (error){
        console.log(error);
    }
    return token;

};

export const getRequest = (url) => {
    const config = {
        method: 'get',
        baseURL: API_URL,
        headers: getUserToken()
    };
    return axios.request(config)
};

export const performRequest = (method, url, params, auth) => {
    const body = method === 'get' ? 'params' : 'data';
    const config = {
        method,
        url: url,
        baseURL: AUTH_URL,
        [body]: params || {}
    };
    if (auth) {
        console.log('performReq auth:', auth);
        config.baseURL = API_URL;
        // console.log('Auth is true, config.base url = ', config.baseURL, url);

        config.headers = {
            Authorization: auth
        }
    }

    console.log('config: ', config);

    return axios.request(config)
};

export const ActionOutcomes = {
    pending: '_PENDING',
    fulfilled: '_FULFILLED',
    rejected: '_REJECTED'
};

export const LOGIN_LOGIN = 'LOGIN_LOGIN';
export const ADD_ADD = 'ADD_ADD';
export const AUTHLOADING_LOGIN = 'AUTHLOADING_LOGIN';
export const FEED_GETFEED = 'FEED_GETFEED';



