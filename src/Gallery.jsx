import React, { useState } from "react";
import { CallMenu } from "./CallMenu";
import { MenuItems } from "./MenuItems";
import { Products } from "./Products";

const allCatValue = [...new Set(Products.map((elem) => elem.company)), "all"];

export const Gallery = () => {
  const [items, setItems] = useState(Products);
  const [catItems, setCatItems] = useState(allCatValue);

  const filterData = (category) => {
    if (category === "all") {
      setItems(Products);
    } else {
      let updatedData = Products.filter((items) => {
        return items.company === category;
      });
      setItems(updatedData);
      // console.log(category);
    }
  };

  const inputHandler = (e) => {
    const val = e.target.value;

    const updateData = Products.filter((items) => {
      return items.title.toLowerCase().includes(val);
    });
    setItems(updateData);
  };

  return (
    <>
      {/* <!-- products --> */}
      <section className="products">
        {/* <!-- filters --> */}
        <div className="filters-container">
          {/* <!-- search --> */}
          <form className="input-form">
            <input
              type="text"
              className="search-input"
              placeholder="search..."
              onChange={inputHandler}
            />
          </form>
          {/* <!-- categories --> */}
          <CallMenu filterData={filterData} catItems={catItems} />
        </div>
        <MenuItems items={items} />
      </section>
    </>
  );
};
