import "./App.css";
import Home from "./components/Pages/Home";
import MealPage from "./components/Pages/mealPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navBar";
import MealDetailsPage from "./components/Pages/mealDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <NavBar />
              <Home />
            </div>
          }
        />
        <Route
          path="/:m"
          element={
            <div>
              <NavBar />
              <MealPage />
            </div>
          }
        />
        <Route
          path="/meals/:id"
          element={
            <div>
              <NavBar />
              <MealDetailsPage />
            </div>
          }
        />
        <Route path="*" element={<div><h2>404 Page not found</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
