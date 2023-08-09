import React, { useContext } from "react";
import Classes from "./MealIemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../Store/Cart-Context";

const MealItemForm = (props) => {
  const ctxt = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("Amount_" + props.id).value;
    ctxt.addItem({ ...props.item, Quantity: quantity });
  };

  return (
    <form className={Classes.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
