import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { dataLinks } from "./data/links";

export default function Links() {
  const { toggler } = useContext(MenuContext);

  const items = (item) => {
    return (
      <a href={item.id} key={item.id}>
        {item.name}
      </a>
    );
  };

  return (
    <nav className={toggler ? "navigation active" : "navigation"}>
      {dataLinks.map(items)}
    </nav>
  );
}
