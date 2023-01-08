import React, { Fragment } from "react";

const Categories = (props) => {
  return (
    <Fragment>
      <div className="btn-container">
        {props.categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => props.filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Categories;
