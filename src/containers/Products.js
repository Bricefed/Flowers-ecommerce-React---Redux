import Card from "../components/Products/Card";
import Heading from "../components/Title/Heading";
import { dataProduct } from "../components/Products/data/product.js";

export default function Products() {
  const item = (item) => {
    return (
      <Card
        key={item.id}
        discount={item.discount}
        img={item.img}
        title={item.title}
        newPrice={item.newPrice}
        oldPrice={item.oldPrice}
      />
    );
  };
  return (
    <section className="products" id="products">
      <Heading span="Derniers" title="produits" />
      <div className="cards-container">{dataProduct.map(item)}</div>
    </section>
  );
}
