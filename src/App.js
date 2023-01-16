import './App.css';
import { useState } from 'react';
import data, { categoriesUnique } from './data'

import ProductList from './ProductList'
import CategoryList from './CategoryList'
import Header from './Header';
import Inventory from './Inventory';

function App() {
  const [category, setCategory] = useState('All')

  return (
    <div className="App"> 
      <Header 
        title="React-Product-List"
        productCount={data.length} 
        categoryCount={categoriesUnique.length} />
      <CategoryList 
        category={category} 
        onClick={ newCategory => setCategory(newCategory) }
      />
      <ProductList 
        category={category}
      />
      <Inventory />
    </div>
  );
}

export default App;
