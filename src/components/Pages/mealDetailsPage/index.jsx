import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./mealDetailsPage.css";
import { useNavigate } from "react-router-dom";

const MealDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.meals[0]);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button"  onClick={() => navigate(-1)}>Back</button>
      <div className="container">
        <img src={details.strMealThumb} alt="details"/>
        <h3>{details.strMeal}</h3>
        <h3>
          Category: {details.strCategory}
          <span>
            <h3>Area: {details.strArea}</h3>
          </span>
        </h3>

        <h4>{details.strInstructions}</h4>
      </div>
    </div>
  );
};

export default MealDetailsPage;
