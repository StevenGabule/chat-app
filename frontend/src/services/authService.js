import API from './api'

const authService = {
    login: (params) => {
        return API.post('/login', params)
            .then(({data}) => {
                setHeadersAndStorage(data)
                return data;
            })
            .catch((err) => {
                console.log("AUTH SERVICE:", err)
                throw err;
            })
    },

    register: (params) => {
        return API.post('/register', params)
            .then(({data}) => {
                setHeadersAndStorage(data)
                return data;
            })
            .catch((err) => {
                console.log("AUTH SERVICE:", err)
                throw err;
            })
    },

    logout: () => {
        API.defaults.headers['Authorization'] = '';
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    },

    updateProfile: (data) => {
        const config = {
            headers: {
               ContentType: 'application/x-www-form-urlencoded'
            }
        }
        return API.post('/users/update', data, config)
            .then(({data}) => {
                localStorage.setItem('user', JSON.stringify(data))
                return data;
            })
            .catch((err) => {
                console.log("AUTH SERVICE:", err);
                throw err;
            })
    },
}

const setHeadersAndStorage = ({user, token}) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
}

export default authService;
