import React from 'react';

const Product = ({ name, code, price, creator, last_modified }) => {
  return (
      <tr>
        <td>{name}</td>
        <td>{code}</td>
        <td>{price}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
      </tr>
  );
}
  

export default Product;