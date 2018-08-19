import React from 'react';
import ProductsTable from '../ProductsTable';

const Landing = () => {
  return (
    <div>
      <div className="center">-Double click price to edit-</div>
      <br/>
      <ProductsTable />
    </div>
  )
}

export default Landing;