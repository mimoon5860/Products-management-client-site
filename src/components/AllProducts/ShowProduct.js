import React from 'react';
import { Link } from 'react-router-dom';

const ShowProduct = ({ product, handleDelete }) => {
    const { name, price, quantity, _id } = product;
    return (
        <div style={{ border: '2px solid black', padding: '10px', margin: '10px' }}>
            <h3>Name: {name}</h3>
            <h2>Price: {price}</h2>
            <p>Quantity: {quantity}</p>
            <Link to={`/updateproduct/${_id}`}><button>Update</button></Link>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default ShowProduct;