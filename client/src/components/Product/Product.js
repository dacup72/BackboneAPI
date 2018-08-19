import React from 'react';
import './Product.css';

const Product = ({ name, code, price, creator, last_modified }) => {
  return (
    
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{code}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
        <td className="buttonsTd"><a className="btn red lighten-3 buttons">Delete</a></td>
      </tr>
      );
    }
      
    
export default Product;