import React from "react";

export const CallMenu = ({ filterData, catItems }) => {
  return (
    <>
      <h5>Company</h5>
      <article className="companies">
        {/* <button
          className="company-btn"
          onClick={() => {
            setItems(Products);
          }}
        >
          all
        </button> */}

        {catItems.map((elem, ind) => {
          return (
            <button
              className="company-btn"
              key={ind}
              onClick={() => {
                filterData(`${elem}`);
              }}
            >
              {elem}
            </button>
          );
        })}

        {/* <button
          className="company-btn"
          onClick={() => {
            filterData("ikea");
          }}
        >
          ikea
        </button>
        <button
          className="company-btn"
          onClick={() => {
            filterData("marcos");
          }}
        >
          marcos
        </button>
        <button
          className="company-btn"
          onClick={() => {
            filterData("caressa");
          }}
        >
          caressa
        </button> */}
      </article>
    </>
  );
};
