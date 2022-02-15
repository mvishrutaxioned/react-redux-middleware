import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../actions/productActions';

const ProductDetail = () => {
    const product = useSelector(state => state.selectedProduct)
    const { image, title, price, category, description } = product
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        .catch(err => console.log(err));

        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if(id && id !== "") fetchProductDetail();
    }, [id])

    return (
        <div className="ui grid container">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
                <>
                <div className="column lp">
                    <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                    <h1>{title}</h1>
                    <h2 className="ui teal tag label">${price}</h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                </div>
                <div className="visible content">Add to Cart</div>
                </>
          )}
        </div>
      );
}

export default ProductDetail;