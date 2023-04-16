import React, { useEffect, useState } from "react";
import "./home.css";
import MealCategory from "../../mealCategory";

const Home = () => {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div>
      <div className="meal-list">
        {categories.map((category) => {
          return <MealCategory key={category.idCategory} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Home;
