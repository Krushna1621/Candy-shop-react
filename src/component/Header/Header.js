import { Fragment, useContext, useEffect } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../Store/CartContext";

const Header = (props) => {
  const cartctx = useContext(CartContext)

 

  const getitems = async () => {
    const response = await fetch(
      "https://crudcrud.com/api/f76411785b234d1880c656bb1d084e84/products"
    );
    const data = await response.json();
    data.map((prod) => {
      return cartctx.addItem({ ...prod });
    });
  };

  useEffect(() => {
    getitems();
    console.log("once");
  }, []);

  return (
    <Fragment>
      <header className={classes.header}>
        <span>
          <h2 className={classes.h2}>Candy Shop React project</h2>
        </span>
        <span>
          <HeaderCartButton onClick={props.onShowCart} />
        </span>
      </header>
    </Fragment>
  );
};

export default Header;