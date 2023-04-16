import React, { useEffect, useState } from "react";
import MealCard from "../../mealCard";
import { useNavigate, useParams } from "react-router-dom";
import "./mealPage.css";

const MealPage = () => {
  const params = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.m}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => console.log("err", err));
  }, [params.m]);

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button"  onClick={() => navigate(-1)}>Back</button>
      <div className="meal-card">
        {meals.map((meal) => {
          return <MealCard key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default MealPage;
