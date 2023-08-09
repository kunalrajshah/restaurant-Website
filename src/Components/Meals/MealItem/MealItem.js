import React from 'react';
import Classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const setPrice=`$${props.price.toFixed(2)}` //Set $ sign before price.
  return (
    <li key={props.id} className={Classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={Classes.description}>{props.description}</div>
        <div className={Classes.price}>{setPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} item={props}/>
      </div>
    </li>
  )
}

export default MealItem;