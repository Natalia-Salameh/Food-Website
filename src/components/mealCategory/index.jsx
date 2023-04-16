import React from "react";
import { Link } from "react-router-dom";
import "./mealCategory.css";

const MealCategory = (props) => {
  const { category } = props;
  return (
    <div className="MealCategory">
    <Link to={`/${category.strCategory}`} className="Link">
      <div>
        <img src={category.strCategoryThumb} alt="category" />
      </div>
      <h3>{category.strCategory}</h3>
    </Link>
    </div>
  );
};
export default MealCategory;
