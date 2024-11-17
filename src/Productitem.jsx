import React from 'react'

const ProductItem = ({ product }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </li> /* Takes each item, and lists them with their name price and description */
    );
};

export default ProductItem;