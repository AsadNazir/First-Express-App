import React, { useEffect, useState, useRef } from 'react'
import '../assets/CSS/home.css'
import { useNavigate } from 'react-router-dom';
import MainPage from './MainPage';


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
        <>
            {verified ?
                <MainPage/>
                : <h1>Not Verified</h1>}
        </>

    )
}
