import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { dataProduct } from "../components/Home/Products/data/product";
import Image from "../components/Product/Image";
// import Infos from "../components/Product/Infos";

export default function Product() {
  const [nbProduct, setNbProduct] = useState(1);

  const updateNbProduct = (e) => {
    setNbProduct(Number(e.target.value));
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      ...product,
      qty: nbProduct,
    };

    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });

    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.classList.remove("visible");
        display = true;
      }, 2000);
      addingInfo.current.classList.add("visible");
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);

  const productSlug = useParams();
  const productDetail = dataProduct.filter(
    (item) => item.slug == productSlug.slug
  );
  const product = productDetail[0];

  return (
    <section className="product">
      <Image
        img={product.img}
        title={product.title}
        discount={product.discount}
      />
      {/* <Infos
        title={product.title}
        newPrice={product.newPrice}
        oldPrice={product.oldPrice}
        desc={product.desc}
      /> */}
      <div className="infos-content">
        <h2>{product.title}</h2>
        <div className="price">
          {product.newPrice} € <span>{product.oldPrice} €</span>
        </div>
        <p>{product.desc}</p>
        <form onSubmit={addToCart}>
          <input
            type="number"
            min="1"
            max="10"
            id="qty"
            value={nbProduct}
            onChange={updateNbProduct}
          />
          <button type="submit" className="btn">
            Ajouter au panier
          </button>
        </form>
      </div>
      <span ref={addingInfo} className="message-flash">
        <strong>{product.title}</strong> <em>+{nbProduct}</em> dans le panier
      </span>
    </section>
  );
}
