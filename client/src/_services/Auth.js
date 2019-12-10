import axios from "../_utils/Api";

class Auth{
    emailUnique = (dispatch, data) => {
        dispatch({type:'AUTH_EMAIL_UNIQUE_STARTED'});
        axios({
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `/auth/email_unique?email=${data}`
        }).then(res=>{
            dispatch({type:'AUTH_EMAIL_UNIQUE_SUCCESS', payload:res.data.unique});
        }).catch(err=>{
            if(typeof err.response !== "undefined"){
                dispatch({type:'AUTH_EMAIL_UNIQUE_FAILURE', payload:err.response});
            }else{
                dispatch({type:'AUTH_EMAIL_UNIQUE_FAILURE', payload:err});
            }
        });
    }

    mobileUnique = (dispatch, data) => {
        dispatch({type:'AUTH_MOBILE_UNIQUE_STARTED'});
        axios({
            method: 'GET',
            headers: { 'content-type': 'application/json' },
            url: `/auth/phone_unique?phone=${data}`
        }).then((res)=>{
            dispatch({type:'AUTH_MOBILE_UNIQUE_SUCCESS', payload:res.data.unique});
        }).catch((err)=>{
            if(typeof err.response !== "undefined"){
                dispatch({type:'AUTH_MOBILE_UNIQUE_FAILURE', payload:err.response});
            }else{
                dispatch({type:'AUTH_MOBILE_UNIQUE_FAILURE', payload:err});
            }
        });;
    }

    register = (dispatch, data) => {
        dispatch({type:'AUTH_REGISTER_STARTED'});
        axios({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: data,
            url: `/auth/register`
        }).then((res)=>{
            dispatch({type:'AUTH_REGISTER_SUCCESS',payload:res.data.data});
        }).catch((err)=>{
            if(typeof err.response !== "undefined"){
                dispatch({type:'AUTH_REGISTER_FAILURE',payload:err.response});
            }
            else{
                dispatch({type:'AUTH_REGISTER_FAILURE',payload:err.toString()});
            }
            
        });
    }
}

export default new Auth();