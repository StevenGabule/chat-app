import API from './api'

const authService = {
    login: (params) => {
        return API.post('/login', params)
            .then(({data}) => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
                return data;
            })
            .catch((err) => {
                console.log("AUTH SERVICE:", err)
            })
    },
    register: (params) => {
        return API.post('/register', params)
            .then(({data}) => {
                API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
                return data;
            })
            .catch((err) => {
                console.log("AUTH SERVICE:", err)
            })
    },
    logout: () => {

    }
}

export default authService;
