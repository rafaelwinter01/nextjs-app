import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  );
};

export default Category;
