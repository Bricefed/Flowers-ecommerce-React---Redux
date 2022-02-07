import MenuContextProvider from "../../contexts/MenuContext";
import Burger from "./Burger";
import Icons from "./Icons";
import Links from "./Links";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <MenuContextProvider>
      <header>
        <Burger />
        <Logo />
        <Links />
        <Icons />
      </header>
    </MenuContextProvider>
  );
}
