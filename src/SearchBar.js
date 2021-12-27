import { useState } from "react";
import React from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const search = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Search For items</h1>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="price">Max Price:</label>
          <input
            type="number"
            id="price"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            className="form-control"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <button
          type="button"
          className="btn btn-primary mt-3 col-4"
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
