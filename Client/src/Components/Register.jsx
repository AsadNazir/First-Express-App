import React from 'react'


export default function Register() {

    let register = async (event) => {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({
                name: document.getElementById('registerName').value,
                password: document.getElementById('registerPassword').value,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                if (data.Error) alert(data.Message);
                else alert("User registered successfully");
            })
    }




    return (
        <div class="Register LoginWrapper" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <div>

                <h1 class="text-center">Register</h1>

                {/* <!-- Name input --> */}
                <div class="form-outline mb-4">
                    <input type="text" id="registerName" class="form-control" />
                    <label class="form-label" for="registerName">Name</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                    <input type="password" id="registerPassword" class="form-control" />
                    <label class="form-label" for="registerPassword">Password</label>
                </div>

                {/* <!-- Repeat Password input --> */}
                <div class="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" class="form-control" />
                    <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                </div>


                <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                        aria-describedby="registerCheckHelpText" />
                    <label class="form-check-label" for="registerCheck">
                        I have read and agree to the terms
                    </label>
                </div>


                {/* <!-- Submit button --> */}
                <div className="btnDiv">
                    <button onClick={register} class="btn btn-primary btn-block mb-3">Sign in</button>
                </div>
            </div>
        </div>
    )
}
