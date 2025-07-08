import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProducts, selectCategories } from '../features/products/productSelectors';

const ProductList = () => {
  const [filters, setFilters] = useState({
    category: 'All Categories',
    availability: '',
    sortBy: ''
  });
  
  const categories = useSelector(selectCategories);
  const products = useSelector(state => 
    selectFilteredProducts(state, filters)
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="product-filter">
      <h1>E-commerce Product Filter</h1>
      
      <div className="filter-section">
        <div>
          <label>Filter by Category:</label>
          <select 
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Filter by Availability:</label>
          <select 
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
        
        <div>
          <label>Sort by:</label>
          <select 
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
          >
            <option value="">Default</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Availability">Availability</option>
          </select>
        </div>
      </div>

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p>
              <strong>Availability:</strong> 
              <span className={product.inStock ? 'in-stock' : 'out-stock'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;