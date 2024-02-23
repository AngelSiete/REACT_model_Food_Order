import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  return (
    <ul id="meals">
      {isLoading && <p className="center">Loading...</p>}
      {error && <Error title="meals Error" msg={error}/>}
      {!isLoading && !error &&
        loadedMeals.length > 1 &&
        loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
