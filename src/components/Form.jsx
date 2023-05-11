import React from 'react';

const Form = () => {
  return (
    <form>
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" />

      <label htmlFor="productPrice">Product Price:</label>
      <input type="text" id="productPrice" />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default Form;
