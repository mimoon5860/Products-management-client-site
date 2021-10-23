import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdateProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    const handleName = e => {
        const name = e.target.value;
        const newProduct = { ...product }
        newProduct.name = name;
        setProduct(newProduct)
    }
    const handlePrice = e => {
        const price = e.target.value;
        const newProduct = { ...product }
        newProduct.price = price;
        setProduct(newProduct)
    }
    const handleQuantity = e => {
        const quantity = e.target.value;
        const newProduct = { ...product }
        newProduct.quantity = quantity;
        setProduct(newProduct)
    }
    const handleUpdate = e => {

        axios.put(`http://localhost:5000/products/${id}`, product)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    alert("Product Updated");
                    history.push('/')
                }
            })


        e.preventDefault();
    }

    return (
        <div>
            <small>Product id: {id}</small>
            <h1>Update Product</h1>
            <form onSubmit={handleUpdate}>
                <h4>Product Name:</h4>
                <input onChange={handleName} value={product.name || ''} type="text" />
                <br /><br />
                <h4>Product Price:</h4>
                <input onChange={handlePrice} value={product.price || ''} type="number" />
                <br /><br />
                <h4>Quantity</h4>
                <input onChange={handleQuantity} value={product.quantity || ''} type="number" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;