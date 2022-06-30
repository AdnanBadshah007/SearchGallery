import React from "react";

export const MenuItems = ({ items }) => {
  return (
    <>
      <div className="products-container">
        {items.map((elem) => {
          return (
            <article className="product" key={elem.id}>
              <img
                src={elem.image}
                className="product-img img"
                alt={elem.company}
              />
              <footer>
                <h5 className="product-name">{elem.title}</h5>
                <span className="product-price">{elem.price}</span>
              </footer>
            </article>
          );
        })}
      </div>
    </>
  );
};
