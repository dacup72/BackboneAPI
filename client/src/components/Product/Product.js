import React from 'react';
import './Product.css';

const Product = ({ id, name, code, price, creator, last_modified, handleClick, handleSubmit, handleCancel, handleDelete, inputValue, showEdit }) => {
  if(showEdit) {
    return (
      <tr>
        <td>{name}</td>
        <td className="priceTd">
          <input type="text" value={inputValue} placeholder={price} onChange={handleClick}/>
          <span className="btn" onClick={() => handleSubmit(id)}>Submit Price</span>
          <span className="btn red lighten-3 cancelBtn" onClick={() => handleCancel(id)}>cancel</span>
        </td>
        <td>{code}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
        <td className="buttonsTd">
          <a className="btn red lighten-3 buttons" onClick={() => handleDelete(id)}>Delete</a>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{name}</td>
        <td onClick={() => handleClick(id)}>{price}</td>
        <td>{code}</td>
        <td>{creator}</td>
        <td>{last_modified}</td>
        <td className="buttonsTd">
          <a className="btn red lighten-3 buttons" onClick={() => handleDelete(id)}>Delete</a>
        </td>
      </tr>
    );
  }
  
}


export default Product;