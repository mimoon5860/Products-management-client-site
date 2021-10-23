import axios from 'axios';
import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const product = { name, price, quantity };
        console.log(product)
        axios.post('http://localhost:5000/products', product)
            .then(res => {
                if (res.data) {
                    alert("Product Added");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <h4>Product Name:</h4>
                <input ref={nameRef} type="text" />
                <br /><br />
                <h4>Product Price:</h4>
                <input ref={priceRef} type="number" />
                <br /><br />
                <h4>Quantity</h4>
                <input ref={quantityRef} type="number" />
                <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;