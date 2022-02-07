import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
  };

  return (
    <MenuContext.Provider value={{ handleToggler, toggler }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
