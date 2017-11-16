import axios from 'axios';

import {USER_API_URL} from '../constants/';

function addUser(user) {
    return axios
        .post(USER_API_URL, user)
        .then(res => res.data);
};

export default {
    addUser
};
