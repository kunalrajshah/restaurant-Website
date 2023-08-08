import React from "react";
import Classes from "./AvailaibleMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Litti and Chokha",
    description: "A Bihar specialty!",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailaibleMeals = () => {
  const mealList = DUMMY_MEALS.map((mealData) => (
    <MealItem name={mealData.name} price={mealData.price} description={mealData.description} id={mealData.id} key={mealData.id}/>
  ));
  return (
    <div className={Classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </div>
  );
};

export default AvailaibleMeals;
