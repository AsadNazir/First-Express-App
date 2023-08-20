import React from 'react'
import { useSelector } from 'react-redux';

export default function Card(props) {

    const user = useSelector(state => state.user);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.item.item_name}</h5>
                <div className='itemInfo'>
                    <div><b className="card-text">Item Id : </b> {props.item.id}</div>
                    <div><b className="card-text">Item Id : </b> {props.item.item_quantity}</div>
                    <div><b className="card-text">Category : </b> {props.item.category_name}</div>
                    <div><b className="card-text">Category : </b> {props.item.location_name}</div>
                </div>
                {
                    props.role === user.role ? <a onClick={() => props.delete(props.item.id)} className="btn btn-danger">
                        Delete
                    </a> : ""
                }

            </div>
        </div>
    )
}
