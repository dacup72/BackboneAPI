import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions';
import './ProductsTable.css';

import Product from '../Product';


class ProductsTable extends Component {
  // Calling fetchProducts from actions to retrieve the products data
  componentDidMount() {
    this.props.fetchProducts();
  }

  // Method for mapping through products returned by the reducers and rendering each in JSX
  renderProducts() {
    return this.props.products.map(({ name, code, price, creator, last_modified }) => {
      return (
          <Product
            name={name}
            code={code}
            price={price}
            creator={creator}
            last_modified={last_modified}
          />
      );
    });
  }

  render() {
    return (
      <table className="striped">
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
        {this.renderProducts()}
        </tbody>
      </table>
    );
  }
};

// Passes products from state to the ProductsTable class as props
function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductsTable);