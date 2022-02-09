import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heading from "../components/Title/Heading";

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
      <li key={item.id}>
        <div className="col">
          <div className="image">
            <img
              src={process.env.PUBLIC_URL + `${item.img}`}
              alt={item.title}
            />
          </div>
          <div className="infos">
            <h4>{item.title}</h4>
            <p className="price">{item.newPrice} €</p>
          </div>
        </div>
        <div className="input">
          <label htmlFor="qtyInput">Quantité</label>
          <input
            type="number"
            min="1"
            max="10"
            id="qtyInput"
            className="qty"
            value={item.qty}
            onChange={(e) => hangleChange(e, item.id)}
          />
        </div>
      </li>
    );
  };

  return (
    <section className="cart">
      <Heading title="Votre" span="Panier" />
      <ul>{storeState.cart.map(item)}</ul>
      <p className="total-price">
        Total : <span className="price">{totalPrice.toFixed(2)} €</span>
      </p>
      <div className="tac">
        <a href="#!" className="btn">
          Procéder au payment
        </a>
      </div>
    </section>
  );
}
