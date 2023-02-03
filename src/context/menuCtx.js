import { createContext } from "react";
const MenuCTX = createContext({
   menuShow: true,
   setMenuShow: () => { }
});
export default MenuCTX;