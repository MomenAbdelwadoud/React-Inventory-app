import { useState } from "react";
import React from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItem = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Add and Item</h1>
      </div>
      <div className="row">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type="text"
          id="brand"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className="row mt-3">
        <button type="button" className="btn btn-primary" onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
