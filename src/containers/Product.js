import { useParams } from "react-router";
import { dataProduct } from "../components/Home/Products/data/product";
import Image from "../components/Product/Image";
import Infos from "../components/Product/Infos";

export default function Product() {
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
      <Infos
        title={product.title}
        newPrice={product.newPrice}
        oldPrice={product.oldPrice}
        desc={product.desc}
      />
    </section>
  );
}
