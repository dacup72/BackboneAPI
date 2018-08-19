import React from 'react';
import ProductsTable from '../ProductsTable';

const Landing = () => {
  return (
    <div>
      <h5 className="center green-text">Click on price to edit</h5>
      <br/>
      <ProductsTable />
    </div>
  )
}

export default Landing;