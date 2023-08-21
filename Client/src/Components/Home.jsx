import React, { useEffect, useState, useRef } from 'react'
import '../assets/CSS/home.css'
import { useNavigate } from 'react-router-dom';
import MainPage from './MainPage';
import Loader from './Loader';
import { verify } from '../Service/service';

export default function Home() {

    const navigate = useNavigate();
    const dataFetched = useRef(false);

    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        if (dataFetched.current) return;
        dataFetched.current = true;

        let user = verify();

        if (user.Error) {
            setLoading(false);

            alert('You are not authorized to view this page');
            navigate('/');

        }

        else {
            setLoading(false);
            setVerified(true);
        }
    }, []);


    return (
        <>
            {loading ? <Loader /> : <MainPage />}
        </>

    )
};
