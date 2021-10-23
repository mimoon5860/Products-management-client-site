import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowProduct from './ShowProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => setProducts(res.data))
    }, [])


    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`

        const confirm = window.confirm('Are you sure ?')

        if (confirm) {
            axios.delete(url)
                .then(res => {
                    if (res.data) {
                        alert('Product Deleted Successfully')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining)
                    }
                })
        }

    }



    return (
        <div>
            <h1>All Products: {products.length}</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', margin: '0 100px' }}>
                {
                    products.map(product => <ShowProduct handleDelete={handleDelete} product={product} key={product._id}></ShowProduct>)
                }
            </div>

        </div>
    );
};

export default AllProducts;