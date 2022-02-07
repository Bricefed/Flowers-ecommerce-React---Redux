import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";

export default function Burger() {
  const { handleToggler, toggler } = useContext(MenuContext);

  return (
    <div
      className={toggler ? "fa fa-times" : "fa fa-bars"}
      onClick={handleToggler}
    ></div>
  );
}
