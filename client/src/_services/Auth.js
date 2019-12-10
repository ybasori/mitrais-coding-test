import axios from "../_utils/Api";

class Auth{
    emailUnique = (data) => {
        return axios({
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `/auth/email_unique?email=${data}`
        });
    }

    mobileUnique = (data) => {
        return axios({
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `/auth/phone_unique?phone=${data}`
        });
    }

    register = (data) => {
        return axios({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: data,
            url: `/auth/register`
        });
    }
}

export default new Auth();