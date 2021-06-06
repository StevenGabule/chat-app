import axios from 'axios';
import store from "../store";
import {logout} from "../store/actions/auth";

const API =  axios.create({
    baseURL: 'http://127.0.0.1:3001',
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`
    }
})
API.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        if (error.response.status !== 401) {
            throw error;
        }
        if (typeof error.response.data.error.name !== 'undefined') {
            if (error.response.data.error.name === 'TokenExpiredError') {
                store.dispatch(logout())
                throw error;
            }
        }
    }
)
export default API;
