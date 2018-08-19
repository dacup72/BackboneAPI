import React from 'react';
import './Product.css';

const Product = ({ id, name, code, price, creator, last_modified, handlePriceClick, handlePriceUpdate, showEdit }) => {
  if(showEdit) {
    return (
      <tr>
        <td>{name}</td>
        <td><input type="text" value="me" onChange={() => handlePriceUpdate(this.value, id)}/></td>
        <td>{code}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
        <td className="buttonsTd">
          <a className="btn red lighten-3 buttons" id={id}>Delete</a>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{name}</td>
        <td onClick={handlePriceClick}>{price}</td>
        <td>{code}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
        <td className="buttonsTd">
          <a className="btn red lighten-3 buttons" id={id}>Delete</a>
        </td>
      </tr>
    );
  }
  
}


export default Product;