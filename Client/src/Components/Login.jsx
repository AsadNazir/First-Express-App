import React from 'react'

export default function Login() {

    let login = async (event) => {
        console.log("Clicked")
        event.preventDefault();

        let results = await fetch('http://localhost:3000/login', {
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
            alert(data.Message);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }


    }
    return (

        <div className="Login" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <h1 className=''>Login</h1>
            <div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input type="email" id="loginName" className="form-control" />
                    <label className="form-label" for="loginName">Email or username</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input type="password" id="loginPassword" className="form-control" />
                    <label className="form-label" for="loginPassword">Password</label>
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check mb-3 mb-md-0">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                            <label className="form-check-label" for="loginCheck"> Remember me </label>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" onClick={login} className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </div>
        </div>
    )
}
