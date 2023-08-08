import {Fragment} from 'react';
import MealsSummary from "../Meals/MealsSummary";
import AvailaibleMeals from './AvailaibleMeals';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailaibleMeals />
    </Fragment>
  )
}

export default Meals;