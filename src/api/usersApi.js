import axios from 'axios';
import {SubmissionError} from 'redux-form'
import shortid from 'shortid';

import {API_URL, USER_API_URL} from '../constants/';

const customHeaderForLogin = {
    'IsAutoLogin': 'true'
};
const config = {
    headers: customHeaderForLogin
};

function rejectForm(message) {
    let errObj = new SubmissionError({_error: message});
    return Promise.reject(errObj);
}

axios
    .interceptors
    .response
    .use((response) => {
        if (response.config.headers.IsAutoLogin) {
 
            let data = response.data;

            if (data != null) {

                let user = {};

                if (!Array.isArray(data)) 
                    user = data;
                else if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') 
                    user = data[0];
                
                if (Object.keys(user).length === 0) 
                    return rejectForm('Bad combinations login/password');
                
                let token = {
                    authenticationToken: user.id + shortid.generate() + 'token'
                };

                let requestData = {
                    ...user,
                    ...token
                };

                return Promise.resolve(axios.put(`${USER_API_URL}${requestData.id}`, requestData));

            } else {
                return rejectForm('Bad combinations login/password');
            }
        }

        return response;
    }, (error) => {
        return Promise.reject(error);
    });

function addUser(user) {

    let requestData = Object.assign({},user);
    delete requestData.confirmPassword;

    return axios
        .post(USER_API_URL, requestData, config)
        .then(result => result.data)
};

function loginUser(loginModel) {

    return new Promise((resolve, reject) => {
        axios
            .get(`${API_URL}users?email=${loginModel.email}&password=${loginModel.password}`, config)
            .then(result => resolve(result.data))
            .catch((error) => {
                if (error instanceof SubmissionError) 
                    reject(error);
                }
            );
    });
}

function logoutUser(user) {

    return axios.put(`${USER_API_URL}${user.id}`, user)
                .then(result => result.data);
}

function getUser(userId) {
    return axios
        .get(`${API_URL}users?id=${userId}`)
        .then(result => result.data[0]);
}

export default {
    addUser,
    loginUser,
    getUser,
    logoutUser
};
