import React, { useState } from "react";

const Categories = (props) => {
  const { categories, categoryFilter } = props;
  const [buttonKey, setButtonKey] = useState(0);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={
              index === buttonKey
                ? "filter-btn btn-lg selected"
                : "filter-btn btn-lg "
            }
            id="filterBtn"
            key={index}
            onClick={() => {
              categoryFilter(category);
              setButtonKey(index);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
