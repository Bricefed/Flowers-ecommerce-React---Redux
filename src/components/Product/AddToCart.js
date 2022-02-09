import { useState } from "react";

export default function AddToCart() {
  const [nbProduct, setNbProduct] = useState(1);

  const updateNbProduct = (e) => {
    setNbProduct(Number(e.target.value));
  };

  return (
    <form>
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
  );
}
