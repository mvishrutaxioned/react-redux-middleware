import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);

    const renderList = products.map((prod, i) => {
        const { id, title, image, price, category } = prod;
        return (
            <li className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={`Image ${i}`}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">{price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent;