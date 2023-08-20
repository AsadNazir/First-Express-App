import React, { useEffect, useReducer, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card';
import '../assets/CSS/card.css'
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/actions';

export default function MainPage() {

    const dispatch = useDispatch();
    const [role, setRole] = useState('');
    const getRole = async () => {
        let token = JSON.parse(localStorage.getItem('userToken'));
        let res = await fetch('http://localhost:3000/auth/verifyRole', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token.Token}`
            }
        })

        let data = await res.json();
        setRole(data.User.role);

        dispatch(setUser(data.User));
    }


    useEffect(() => {
        getRole();
    }, [])


    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
