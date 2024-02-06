import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
     try {
        const response = await fetch("http://localhost:3000/meals");
        const meals = await response.json();
        setLoadedMeals(meals);
      } catch (err) {
        console.log('error ' + err)
        return
      }
    }
    fetchMeals();
  }, []);
  const foodArray = []
  loadedMeals.map((meal) => {
    foodArray.push(meal)
  })
  return (
    <ul id="meals">
        {foodArray.length > 1 && foodArray.map((meal) => 
          <MealItem key={meal.id} meal={meal}/>
        )}
    </ul>
  );
}
