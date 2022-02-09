import Icon from "./Icon";
import { dataIcon } from "./data/icon.js";

export default function Icons() {
  const item = (item) => {
    return (
      <Icon
        key={item.id}
        img={process.env.PUBLIC_URL + item.img}
        title={item.title}
        subtitle={item.subtitle}
      />
    );
  };
  return <section className="icons-container">{dataIcon.map(item)}</section>;
}
