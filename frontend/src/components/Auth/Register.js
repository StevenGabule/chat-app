import React, {useState} from 'react';
import './Auth.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {register} from "../../store/actions/auth";

const Register = ({history}) => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(register({firstName, lastName, gender, email, password}, history));
    }

    return (
        <div id={'auth-container'}>
            <div id={"auth-card"}>
                <div>
                    <div id={'image-section'}>
                        <h3>Register Page</h3>
                    </div>
                    <div id="form-section">
                        <h4>Create an account</h4>
                        <form onSubmit={submitForm}>
                            <div className="input-field">
                                <input name={'firstName'}
                                       onChange={(e) => setFirstName(e.target.value)}
                                       type="text"
                                       value={firstName}
                                       placeholder={'First name'}
                                       className={'form-control'}/>
                            </div>
                            <div className="input-field">
                                <input name={'lastName'}
                                       value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}
                                       type="text"
                                       placeholder={'Last name'}
                                       className={'form-control'}/>
                            </div>

                            <div className="input-field">
                                <select onChange={e => setGender(e.target.value)}
                                        name="gender"
                                        id="gender"
                                        value={gender}
                                        className={'form-control'}
                                        style={{width: '110%'}}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="input-field">
                                <input onChange={e => setEmail(e.target.value)}
                                       type="email"
                                       name={'email'}
                                       value={email}
                                       placeholder={'Email'}
                                       className={'form-control'}/>
                            </div>
                            <div className="input-field">
                                <input type="password"
                                       name={'password'}
                                       value={password}
                                       onChange={e => setPassword(e.target.value)}
                                       placeholder={'Password'}
                                       className={'form-control'}/>
                            </div>
                            <button type={'submit'} className={'btn-login'}>Register</button>
                        </form>
                        <p>Already have an account? <Link to={'/login'}>Login here!</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
