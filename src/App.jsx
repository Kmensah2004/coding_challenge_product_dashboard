import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList.jsx'
import AddProductForm from './AddProductForm.jsx'

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Soccer', price: 60, description: `A staple of sports balls. Walk to any park and field and odds are you'll find people playing with this.` },
    { id: 2, name: 'Jersey', price: 130, description: `A representation of a piece of clothing with the players identity and their last name on the back.` },
    { id: 3, name: 'Cleats', price: 120, description: `A unique rubber outsole is designed to generate traction and balance on the field that allows for cuts cut and head fake has total support.` },
    { id: 4, name: 'Compression pants', price: 30, description: `While preparing for the season, compression pants are crucial. They're stretchy, comfy, and full of Sport Style.` },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, {...newProduct}]); {/* allows a new, added product to join the  list of products */}
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} /> {/* adds the list of products to this portion  */}
      <AddProductForm addProduct={addProduct} /> {/* adds the addProduct function to our page */}
    </div>
  );
};

export default App;