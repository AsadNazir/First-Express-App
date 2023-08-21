import React from 'react'
import '../assets/CSS/AddForm.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { verify } from '../Service/service';


export default function AddForm() {


    const [locations, setLocations] = useState([]);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();



    //get all locations from database
    const getAllLocations = async () => {
        let token = JSON.parse(localStorage.getItem("userToken"));

        const response = await fetch('http://localhost:3000/inventory/allLocation', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.Token}`,
            },
        });

        const data = await response.json();
        return data;
    }


    //get all categories from database
    const getAllCategories = async () => {
        let token = JSON.parse(localStorage.getItem("userToken"));

        const response = await fetch('http://localhost:3000/inventory/allCategory', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.Token}`,
            },
        });

        const data = await response.json();
        return data;
    }

    const addNewItem = async () => {
        let token = JSON.parse(localStorage.getItem("userToken"));
        const response = await fetch('http://localhost:3000/inventory/addItem', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token.Token}`,
            }
            ,
            body: JSON.stringify({
                item_name: document.getElementById('name').value,
                item_quantity: document.getElementById('qty').value,
                item_location_id: document.getElementById('location').value,
                item_category_id: document.getElementById('category').value
            })
        });

        const data = await response.json();

        if (data.Error) {
            alert(data.Message);
        }
        else {
            alert('Item added successfully');
        }
    }

    useEffect(() => {

        let user = verify();

        user.then(data => {
            if (data.Error || data.Data.User.role !== 'admin') {
                alert('You are not authorized to view this page');
                navigate('/');
            }
        })


        getAllLocations().then(data => {
            setLocations(data.Location);

        })

        getAllCategories().then(data => {
            setCategories(data.Categories);

        }
        )



    }, [])








    return (
        <div className="row g-3 AddForm">
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Quantity</label>
                <input type="number" min={0} className="form-control" id="qty" />
            </div>
            <div className="col-md-12">
                <label htmlFor="inputState" className="form-label">Product Location</label>
                <select id="location" className="form-select">
                    {
                        locations.map((location) => {
                            return <option value={location.id} key={location.id}>{location.location_name}</option>
                        })
                    }
                </select>
            </div>
            <div className="col-md-12">
                <label htmlFor="inputState" className="form-label">Product Category</label>
                <select id="category" className="form-select">
                    {
                        categories.map((category) => {
                            return <option value={category.id} key={category.id}>{category.category_name}</option>
                        })
                    }
                </select>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div className="col-16">
                <button onClick={addNewItem} type="submit" className="btn btn-primary">Add Item</button>
            </div>
        </div>
    )
}
