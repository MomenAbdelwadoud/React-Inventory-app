import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItems = (item) => {
    let items = data["items"];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      })
      .catch((e) => console.error("err::", e));
  };
  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          setData({
            items: items.filter(
              (curr) => items.indexOf(curr) !== items.indexOf(item)
            ),
          });
        }
      }
    );
  };
  const filterData = (data) => {
    let filteredData = [];
    if (!filters.name && !filters.price && !filters.type && !filters.brand) {
      return data;
    }

    for (let item of data) {
      if (item.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (item.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (item.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (item.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters}></SearchBar>
      </div>
      <div className="row mt-3">
        {JSON.stringify(data["items"]) === "{}" ? (
          <h4>No Items to display, please add items</h4>
        ) : (
          <ItemsDisplay
            items={filterData(data["items"])}
            deleteItem={deleteItem}
          ></ItemsDisplay>
        )}
      </div>

      <div className="row m-3">
        <AddItem addItem={addItems}></AddItem>
      </div>
    </div>
  );
}

export default App;
