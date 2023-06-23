import { useContext, useEffect } from "react";
import CartContext from "../Store/CartContext";
import classes from './Krushna.module.css'

const Krushna = (props) => {
  const cartCntx = useContext(CartContext);

  const addCart = (quantity) => {
    const obj = {
      key: props.id,
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    };
    cartCntx.addItem(obj);
    console.log(obj);
  };

  return (
    <li className={classes.rohan}>
      {props.name} {props.description} {props.price} {props.quantity}
      <button onClick={() => addCart(1)}>Buy One</button>
      <button onClick={() => addCart(2)}>Buy Two</button>
    </li>
  );
};

export default Krushna;
