import React, {useState, useEffect} from 'react';
import "./Register.css";
import Auth from '../_services/Auth';
import {
  Link
} from "react-router-dom";

function Register() {
    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState([]);
    const [mobileClass, setMobileClass] = useState("form-control");

    const [firstname, setFirstname] = useState('');
    const [firstnameError, setFirstnameError] = useState([]);
    const [firstnameClass, setFirstnameClass] = useState("form-control");

    const [lastname, setLastname] = useState('');
    const [lastnameError, setLastnameError] = useState([]);
    const [lastnameClass, setLastnameClass] = useState("form-control");

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState([]);
    const [emailClass, setEmailClass] = useState("form-control");

    const [listMonth, setListMonth] = useState([]);
    const [month, setMonth] = useState('');

    const [listDate, setListDate] = useState([]);
    const [date, setDate] = useState('');

    const [listYear, setListYear] = useState([]);
    const [year, setYear] = useState('');

    const [gender, setGender] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);

    const [isLoginButton, setIsLoginButton] = useState(false);

    useEffect(() => {
        document.title = "Registration";

        if(listMonth.length===0){
            let m=[];
            for(let i=1;i<=12;i++){
                m.push(i);
            }
            setListMonth(m);
        }
        if(listYear.length===0){
            let y=[];
            for(let i=(new Date()).getFullYear();i>=1990;i--){
                y.push(i);
            }
            setListYear(y);
        }
        
    },[listMonth.length, listYear.length]);



    const validateMobile = (value) => {
        let errors = [];
        if(value===""){
            errors.push('mobile number is required')
        }
        if(!value.match(/^(\+62)([0-9])+$/g)){
            errors.push('mobile number should be indonesian phone number')
        }
        else{
            Auth.mobileUnique(value.replace("+","")).then((res)=>{
                if(!res.data.unique){
                    errors.push('mobile number has already been taken')
                }
                if(errors.length>0){
                    setMobileClass("form-control is-invalid");
                }
                else{
                    setMobileClass("form-control is-valid");
                }
                setMobileError(errors);
            }).catch((err)=>{});
        }
        if(errors.length>0){
            setMobileClass("form-control is-invalid");
        }
        else{
            setMobileClass("form-control is-valid");
        }
        setMobileError(errors);
        setMobile(value);
    }

    const validateFirstname = (value) => {
        let errors = [];
        if(value===""){
            errors.push('firstname is required')
        }
        if(errors.length>0){
            setFirstnameClass("form-control is-invalid");
        }
        else{
            setFirstnameClass("form-control is-valid");
        }
        setFirstnameError(errors);
        setFirstname(value);
    }

    const validateLastname = (value) => {
        let errors = [];
        if(value===""){
            errors.push('lastname is required')
        }
        if(errors.length>0){
            setLastnameClass("form-control is-invalid");
        }
        else{
            setLastnameClass("form-control is-valid");
        }
        setLastnameError(errors);
        setLastname(value);
    }

    const validateEmail = (value) => {
        let errors = [];
        if(value===""){
            errors.push('email is required')
        }
        if(!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g)){
            errors.push('invalid email')
        }
        else{
            Auth.emailUnique(value).then((res)=>{
                if(!res.data.unique){
                    errors.push('email has already been taken')
                }
                if(errors.length>0){
                    setEmailClass("form-control is-invalid");
                }
                else{
                    setEmailClass("form-control is-valid");
                }
                setEmailError(errors);
            }).catch((err)=>{});
        }
        
        if(errors.length>0){
            setEmailClass("form-control is-invalid");
        }
        else{
            setEmailClass("form-control is-valid");
        }
        setEmailError(errors);
        setEmail(value);
    }

    const onChangeMobile = (e) => {
        let value = e.target.value;
        validateMobile(value);
    }

    const onChangeFirstname = (e) => {
        let value = e.target.value;
        validateFirstname(value);
    }

    const onChangeLastname = (e) => {
        let value = e.target.value;
        validateLastname(value);
    }

    const onChangeMonth = (e) => {
        let m = e.target.value;
        let y = (new Date()).getFullYear();
        if(year!==''){
            y = year;
        }
        onListDate(m, y);
        setMonth(m);
    }

    const onListDate = (m, y) => {
        let tigaSatu = ['1','3','5','7','8','10','12'];
        let lastDay = 30;
        if(tigaSatu.indexOf(m)>=0){
            lastDay = 31;
        }
        else if(m==='2'){
            if(y % 4 !== 0){
                lastDay = 28;
            }
            else{
                lastDay = 29;
            }
        }
        let d =[];
        for(let i=1;i<=lastDay;i++){
            d.push(i);
        }
        setListDate(d);
    }

    const onChangeYear = (e) => {
        let y = e.target.value;
        let m = ((new Date()).getMonth()+1).toString();
        if(month!==''){
            m = month;
        }
        onListDate(m, y);
        setYear(y);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangeEmail = (e) => {
        let value = e.target.value;
        validateEmail(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        validateMobile(mobile);
        validateFirstname(firstname);
        validateLastname(lastname);
        validateEmail(email);

        let errors = mobileError.length + firstnameError.length + lastnameError.length + emailError.length;

        if(errors === 0 && mobile !== "" && firstname!=="" && lastname!=="" && email!==""){
            let data = {
                mobile,
                firstname,
                lastname,
                email
            }

            if(month!=='' && date!=='' & year!==''){
                data.dob = year+'-'+month+'-'+date;
            }
            if(gender!==''){
                data.gender = gender;
            }

            
            setIsLoading(true);
            Auth.register(data).then((res)=>{
                setIsLoading(false);
                setIsLoginButton(true);
            }).catch((err)=>{
                setIsLoading(false);
            });
        }
        
    }

    return (
        <>
            <div className="row justify-content-md-center">
                <div className="col-md-7">
                    <div className="card highlight">
                        <div className="card-body">
                            <h1>Registration</h1>
                            <form onSubmit={onSubmit}>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input id="mobilenumber" type="text" className={mobileClass} placeholder="Mobile Number" value={mobile} onChange={onChangeMobile} />
                                        {(mobileError.length>0)?
                                        <div style={{display:"block"}} className="invalid-tooltip">
                                            <ul>
                                            {mobileError.map((error, index)=>{
                                                return (<li key={index}>{error}</li>);
                                            })}
                                            </ul>
                                        </div>
                                        :<></>}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input id="firstname" type="text" className={firstnameClass} placeholder="First name" value={firstname} onChange={onChangeFirstname} />
                                        {(firstnameError.length>0)?
                                        <div style={{display:"block"}} className="invalid-tooltip">
                                            <ul>
                                            {firstnameError.map((error, index)=>{
                                                return (<li key={index}>{error}</li>);
                                            })}
                                            </ul>
                                        </div>
                                        :<></>}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input id="lastname" type="text" className={lastnameClass} placeholder="Last name" value={lastname} onChange={onChangeLastname} />
                                        {(lastnameError.length>0)?
                                        <div style={{display:"block"}} className="invalid-tooltip">
                                            <ul>
                                            {lastnameError.map((error, index)=>{
                                                return (<li key={index}>{error}</li>);
                                            })}
                                            </ul>
                                        </div>
                                        :<></>}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <label className="col-md-12">Date of Birth</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <select className="form-control" onChange={onChangeMonth}>
                                                            <option value="" hidden>Month</option>
                                                            {listMonth.map((m, i)=><option key={i}>{m}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <select className="form-control" onChange={onChangeDate}>
                                                            <option value="" hidden>Date</option>
                                                            {listDate.map((d, i)=><option key={i}>{d}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <select className="form-control" onChange={onChangeYear}>
                                                            <option value="" hidden>Year</option>
                                                            {listYear.map((y, i)=><option key={i}>{y}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="gender" type="radio" value="male" id="gender-male" onChange={(e)=>setGender("male")} />
                                        <label className="form-check-label" for="gender-male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" name="gender" type="radio" value="female" id="gender-female" onChange={(e)=>setGender("female")} />
                                        <label className="form-check-label" for="gender-female">Female</label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <input id="email" type="text" className={emailClass} placeholder="Email" autoComplete="off" value={email} onChange={onChangeEmail} />
                                        {(emailError.length>0)?
                                        <div style={{display:"block"}} className="invalid-tooltip">
                                            <ul>
                                            {emailError.map((error, index)=>{
                                                return (<li key={index}>{error}</li>);
                                            })}
                                            </ul>
                                        </div>
                                        :<></>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    {(isLoading)?
                                        <button className="btn-primary form-control" disabled><i className="fas fa-circle-notch fa-spin"></i></button>
                                        :
                                        <button className="btn btn-primary form-control">Register</button>
                                    }
                                    
                                </div>
                            </form>
                        </div>
                        {isLoginButton?
                        <div style={{position: "absolute", backgroundColor: "#fff", width: "100%", height: "100%", top: 0, opacity: 0.5}}></div>
                        :
                        <></>
                        }
                    </div>
                    
                </div>
            </div>
            <div className="row justify-content-md-center mt-5">
                <div className="col-md-12" style={{backgroundColor: "#ecf0f1", height: 95}}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-7">
                            <div className="card highlight">
                                <div className="card-body">
                                    {(isLoginButton)?
                                    <Link to="/login" className="btn btn-primary btn-block">Login</Link>
                                    :
                                    <></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;