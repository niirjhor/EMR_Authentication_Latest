import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const auth = getAuth();
    const [username, setUserName] = useState('');
    const { signInUsingGoogle, setIsLoading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/register';
    console.log('came from', location.state?.from);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })


    }
    const toggleLogin = e => {

        setIsLogin((e.target.checked));
    }
    const handleNameChange = e => {
        setUserName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();

        console.log(email, password);
        if (password.length < 8) {
            setError('Password must be atleast 8 characters')
            return;
        }


        if (isLogin) {
            processLogin(email, password);
        }
        else {
            createNewUser(email, password);

        }
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                history.push(redirect_url);

                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setName();
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const setName = () => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => {
                window.location.reload();
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                

            })
            .catch(error => {
                setError(error.message);
            })
    }
    






    return (
        <>
           <div>
            <div className="container border border-dark mt-5 mb-5 p-4 border-2  fw-bold ">
                <div className="mx-5 mt-5 ">
                    <form onSubmit={handleRegistration}>

                        <h3 className="text-dark fs-1 pb-2"> {isLogin ? 'Login' : 'Register'}</h3>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control"
                                    placeholder="insert email" id="inputEmail3" required />
                            </div>
                        </div>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="text" placeholder="insert username" className="form-control" required />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="insert password" required />
                            </div>
                        </div>

                        <div className="row mb-3 ">
                            <div className="col-sm-10 offset-sm-2 col-md-3 pe-5">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">
                            {error}
                        </div>

                        <button type="submit" className="btn btn-warning mb-4">{isLogin ? 'Sign In' : 'Register'}</button> <br />
                        

                    </form>

                </div>
            </div>
            <div><p>Or Sign Up Using</p></div>
            {/* Google Sign up */}
            <button className="btn btn-dark mb-5 p-3" onClick={handleGoogleLogin}>
                <i className="fab fa-google pe-3 fa-2x "></i> Sign In Using Google</button>
        </div>
        </>

    );
};

export default Login;