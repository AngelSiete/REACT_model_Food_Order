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
  console.log(loadedMeals)
  return (
    <ul id="meals">
        {setLoadedMeals && loadedMeals[3].name}
    </ul>
  );
}
