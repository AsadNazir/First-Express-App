import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../assets/CSS/login.css'

export default function Login() {
    let navigate = useNavigate();
    let login = async (event) => {

        event.preventDefault();

        let results = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('loginName').value,
                password: document.getElementById('loginPassword').value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        try {
            let data = await results.json();
            if (!data.Error) {

                localStorage.setItem('userToken', JSON.stringify(data));
                navigate('/home');
            }
            else {
                alert(data.Error);
            }
        }
        catch (err) {
            console.log(err);
        }

    }



    return (
        <div className="LoginWrapper">
            <div className="Login" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <h1 className=''>Login</h1>
                <div>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input type="email" id="loginName" className="form-control" />
                        <label className="form-label" htmlFor="loginName">Email or username</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="loginPassword" className="form-control" />
                        <label className="form-label" htmlFor="loginPassword">Password</label>
                    </div>

                    {/* <!-- 2 column grid layout --> */}
                    <div className="row mb-4">

                        <div className="col-md-12 d-flex justify-content-center">
                            {/* <!-- Simple link --> */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" onClick={login} className="btn btn-primary btn-block mb-4">Sign in</button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                        <p>Not a member? <Link to={"/register"}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div >
    )
}
