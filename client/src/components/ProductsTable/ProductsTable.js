import React, { Component } from 'react';
import Product from '../Product';

class ProductsTable extends Component {
  

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>CODE</th>
            <th>CREATED BY</th>
            <th>LAST MODIFIED</th>
          </tr>
        </thead>
        <tbody>

          <Product />
        </tbody>
      </table>
    );
  };
}

export default ProductsTable;