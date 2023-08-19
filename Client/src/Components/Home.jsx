import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../assets/CSS/home.css'
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();
    const dataFetched = useRef(false);

    const [verified, setVerified] = useState(false);

    const verify = async () => {

        let token = JSON.parse(localStorage.getItem('userToken'));

        let results = await fetch('http://localhost:3000/user/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token.Token}`
            }
        })

        let data = await results.json();

        console.log(data);

        if (data.Error) {
            alert('You are not authorized to view this page');
            return;
        }
        else
            setVerified(true);

    }

    useEffect(() => {
        if (dataFetched.current) return;
        dataFetched.current = true;

        verify();
    }, [])



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {verified ? <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Add" className="nav-link" >Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Remove" className="nav-link" >Remove</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div> : <h1>Not Verified</h1>}

        </nav>

    )
}
