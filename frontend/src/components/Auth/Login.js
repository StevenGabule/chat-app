import React, {useState} from 'react';
import './Auth.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/auth";

const Login = ({history}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('wickss11@gmail.com');
    const [password, setPassword] = useState('Wickss');

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(login({email, password}, history))
    }

    return (
        <div id={'auth-container'}>
            <div id={"auth-card"}>
                <div>
                    <div id={'image-section'}>
                        <h3>Login Page</h3>
                    </div>
                    <div id="form-section">
                        <h4>Welcome Back</h4>
                        <form onSubmit={submitForm}>
                            <div className="input-field">
                                <input
                                    value={email}
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder={'Email'}
                                    className={'form-control'}/>
                            </div>
                            <div className="input-field">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    type="password"
                                    placeholder={'Password'}
                                    className={'form-control'}/>
                            </div>
                            <button type={'submit'} className={'btn-login'}>Log In</button>
                        </form>
                        <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
