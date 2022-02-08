import { useParams } from "react-router";
import { dataProduct } from "../../components/Products/data/product";

export default function Product() {
  const productSlug = useParams();
  const productDetail = dataProduct.filter(
    (item) => item.slug == productSlug.slug
  );
  const product = productDetail[0];

  return (
    <section className="product">
      <div className="image">
        <img src={product.img} alt={product.title} />
        <span className="discount">{product.discount}</span>
      </div>
      <div className="infos-content">
        <h2>{product.title}</h2>
        <div className="price">
          {product.newPrice} € <span>{product.oldPrice} €</span>
        </div>
        <p>{product.desc}</p>
        <button className="btn">Ajouter au panier</button>
      </div>
    </section>
  );
}
