import { useSelector, useDispatch } from "react-redux";
import BtnPayement from "../components/Cart/BtnPayement";
import Heading from "../components/Title/Heading";
import Item from "../components/Cart/Item";

export default function Cart() {
  const storeState = useSelector((state) => state);

  const dispatch = useDispatch();

  const hangleChange = (e, id) => {
    const indexItem = storeState.cart.findIndex((x) => x.id === id);

    const objUpdate = {
      ...storeState.cart[indexItem],
      qty: Number(e.target.value),
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdate,
    });
  };

  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.newPrice * item.qty;
      totalPrice += itemPrice;
    }
  }

  const item = (item) => {
    return (
      <Item
        id={item.id}
        img={item.img}
        title={item.title}
        newPrice={item.newPrice}
        qty={item.qty}
      >
        <input
          type="number"
          min="1"
          max="10"
          id="qtyInput"
          className="qty"
          value={item.qty}
          onChange={(e) => hangleChange(e, item.id)}
        />
      </Item>
    );
  };

  return (
    <section className="cart">
      <Heading title="Votre" span="Panier" />
      <ul>{storeState.cart.map(item)}</ul>
      <p className="total-price">
        Total : <span className="price">{totalPrice.toFixed(2)} €</span>
      </p>
      {totalPrice > 0 && <BtnPayement />}
    </section>
  );
}
