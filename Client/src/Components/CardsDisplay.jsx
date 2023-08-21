import React from 'react'
import Card from './Card';
import '../assets/CSS/card.css'
import { useState, useEffect } from 'react';
import { verify } from '../Service/service';

export default function CardsDisplay() {

    const [Item, setItem] = useState([]);
    const [data, setData] = useState('');
    //Delete fucntion
    const deleteItem = async (id) => {
        let token = JSON.parse(localStorage.getItem('userToken'));
        let res = await fetch(`http://localhost:3000/inventory/deleteItem/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token.Token}`
            }
        })

        //delete the item from Item array
        let filteredItems = Item.filter((item) => {
            return item.id !== id;
        })

        setItem(filteredItems);

        let data = await res.json();
        console.log(data);
    }


    //get ALl items API
    const getALlItems = async () => {
        let token = JSON.parse(localStorage.getItem('userToken'));
        let res = await fetch('http://localhost:3000/inventory/allItems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token.Token}`
            }
        })

        let data = await res.json();
        setItem(data.Items);

    }

    useEffect(() => {

        verify().then(data => {
            console.log(data);
            setData(data);
            if (data.Error) {
                alert('You are not authorized to view this page');
                navigate('/');
            }
        })



        getALlItems();
    }, [])

    return (
        <div className='cardCont'>
            {
                Item.map((item) => {
                    return <Card key={item.id} role={data.Data.User.role} item={item} delete={deleteItem}/>
                })
            }
        </div>
    )
}
