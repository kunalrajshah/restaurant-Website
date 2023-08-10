import React from 'react';
import Classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import Litti from '../../../assets/litti.jpg';
import Chole from '../../../assets/chole.jpeg';
import Burger from '../../../assets/burger.webp';
import GreenBowl from '../../../assets/green.jpg';
import Aloo from '../../../assets/aloo.jpg';


const MealItem = (props) => {
  const setPrice=`$${props.price.toFixed(2)}` //Set $ sign before price.
  // Image Object
  const mealImage={
    'Litti and Chokha':Litti,
    'Chole Bhature':Chole,
    'Barbecue Burger':Burger,
    'Green Bowl':GreenBowl,
    'Aloo Paratha':Aloo
  }
  
  const imgsrc=mealImage[props.name];
  return (
    <li key={props.id} className={Classes.meal}>
      <div>
        <h3><img src={imgsrc} alt={props.name} />{props.name}</h3>
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