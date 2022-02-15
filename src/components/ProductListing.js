import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../actions/productActions';

const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios('https://fakestoreapi.com/products')
        .catch(err => console.log(err))

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="list ui grid container">
            <ul><ProductComponent /></ul>
        </div>
    )
}

export default ProductListing;