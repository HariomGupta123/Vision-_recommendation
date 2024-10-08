import { MdClose } from "react-icons/md";

  import { BsCartX } from "react-icons/bs"

import "./card.css";
import CardItems from "./CardItems/CardItems";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
const Cards = ({ showCart }) => {
  const { cardSubTotal,cardItem } = useContext(UserContext);
  return (
    <>
      <div className="cart-panel">
        <div className="opac-layer"> </div>
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">shopping Cart</span>
            <span className="close-btn">
              <MdClose
                onClick={() => {
                  showCart(false);
                }}
              >
                <span className="text">close</span>
              </MdClose>
            </span>
          </div>
          {!cardItem?.length &&<div className="empty-cart">
               <BsCartX className="svgs"/>
               <span>No product in the cart.</span>
               <button className="return-cta">RETURN TO SHOP</button>
            </div>}
          { !!cardItem.length && <>
            <CardItems />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text-total">&#8377;{cardSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta">checkout</button>
              </div>
            </div>
          </>}
        </div>
      </div>
    </>
  );
};
export default Cards;
