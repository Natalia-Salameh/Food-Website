import React from "react";
import { Link } from "react-router-dom";
import "./mealCard.css";

const MealCard = (props) => {
  const { meal } = props;

  return (
    <div className="meal">
      <Link to={`/meals/${meal.idMeal}`} className="Link">
        <div className="meal-list">
          <img className="image" src={meal.strMealThumb} alt="meal" />
        </div>
        <h3>{meal.strMeal}</h3>
      </Link>
    </div>
  );
};

export default MealCard;