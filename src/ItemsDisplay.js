import React from "react";

function ItemsDisplay({ items, deleteItem }) {
  const showItem = (item) => {
    return (
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteItem(item)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h3>ITEMS:</h3>
      </div>
      <table className="table table-striped">
        <thead>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">PRICE</th>
          <th scope="col">TYPE</th>
          <th scope="col">BRAND</th>
          <th scope="col">DELETE</th>
        </thead>
        <tbody>{items.map(showItem)}</tbody>
      </table>
    </div>
  );
}

export default ItemsDisplay;
