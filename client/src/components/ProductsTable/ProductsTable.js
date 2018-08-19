import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, updatePrice } from '../../actions';
import './ProductsTable.css';

import Product from '../Product';


class ProductsTable extends Component {
  state = {
    showEditId: Infinity,
    inputValue: ""
  }

  // Calling fetchProducts from actions to retrieve the products data
  componentDidMount() {
    this.props.fetchProducts();
  }

  handlePriceClick = (id) => {
    this.setState({
      showEditId: id,
    });
    console.log(this.state)
  };

  handlePriceUpdate = event => {
    this.setState({
      inputValue: event.target.value
    });
    console.log(this.state)
  }

  handlePriceSubmit = id => {
    this.props.updatePrice(this.state.inputValue, id);
    this.setState({
      inputValue: "",
      showEditId: Infinity
    });
  }

  // Method for mapping through products returned by the reducers and rendering each in JSX
  renderProducts() {
    return this.props.products.map(({ id, name, code, price, creator, last_modified }) => {
      if (this.state.showEditId === id) {
        return (
          <Product
            name={name}
            code={code}
            price={price}
            creator={creator}
            last_modified={last_modified}
            id={id}
            handleClick={this.handlePriceUpdate}
            inputValue={this.state.inputValue}
            showEdit={true}
            handleSubmit={this.handlePriceSubmit}
          />
        );
      } 
      else {
        return (
          <Product
            name={name}
            code={code}
            price={price}
            creator={creator}
            last_modified={last_modified}
            id={id}
            handleClick={this.handlePriceClick}
            inputValue={this.state.inputValue}
            showEdit={false}
          />
        );
      }

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

export default connect(mapStateToProps, { fetchProducts, updatePrice })(ProductsTable);