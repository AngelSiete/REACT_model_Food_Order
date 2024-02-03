import { useEffect } from "react";
import { useState } from "react";

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
  const namesArray = []
  loadedMeals.map((meal) => {
    namesArray.push(meal.name)
  })
  return (
    <ul id="meals">
        {namesArray.map((meal) => 
          <li key={meal}>{meal}</li>
        )}
    </ul>
  );
}
