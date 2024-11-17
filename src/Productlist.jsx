import React from 'react'
import ProductItem from './ProductItem.jsx'

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => ( 
            <ProductItem key={product.id} product={product} />
                ))} {/* lists all the products with their details in the Product List */}
            </ul>
        </div>
    );
};

export default ProductList;