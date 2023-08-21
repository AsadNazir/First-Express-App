import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card';
import '../assets/CSS/card.css'
import { Outlet } from 'react-router-dom';
import { verify } from '../Service/service';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    const navigate = useNavigate()
    
    useEffect(() => {

        let user = verify();
       user.then(data => {
              if (data.Error) {
                    alert('You are not authorized to view this page');
                    navigate('/');
                }
            })
    }, []);

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
