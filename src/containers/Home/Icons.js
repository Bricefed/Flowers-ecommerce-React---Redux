import Icon from "../../components/Icons/Icon";
import { dataIcon } from "../../components/Icons/data/icon.js";

export default function Icons() {
  const item = (item) => {
    return (
      <Icon
        key={item.id}
        img={item.img}
        title={item.title}
        subtitle={item.subtitle}
      />
    );
  };
  return <section className="icons-container">{dataIcon.map(item)}</section>;
}
