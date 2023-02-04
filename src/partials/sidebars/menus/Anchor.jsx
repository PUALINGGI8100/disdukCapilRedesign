import { useContext } from "react";
import { Link } from "react-router-dom";
import { InformasiCTX, LayananCTX } from "./collapseCTX";
import MenuCTX from "../../../context/menuCtx";

const Anchor = ({ isActive, Icon, text, to, expand, onClick, inside, title }) => {
  const {setIsLayananActive} = useContext(LayananCTX);
  const {setIsInformasiActive} = useContext(InformasiCTX);
  const { menuShow, setMenuShow } = useContext(MenuCTX);
  const purify = async () => {
    await setIsInformasiActive(false);
    await setIsLayananActive(false);
  }
  const hideMenu = () => {
    if (!expand && menuShow) setMenuShow(false);
  }
   return (
     <Link
       onClick={() => { onClick.call(purify(), hideMenu()); }}
       to={to} title={title??""}
       className={`flex w-full justify-center bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 dark:hover:bg-cyan-500 ${isActive?"bg-cyan-600 dark:bg-cyan-300":"text-slate-900 dark:text-slate-100"} ${!expand?"p-3 gap-3 sm:py-4":"p-3 items-center"} ${inside?"rounded":"rounded-0"}`}
     >
       {Icon&&<Icon className="w-6 h-6" />}
       <span className={`w-full text-start ${expand&&Icon ? "hidden" : "block"}`}>{text??<></>}</span>
     </Link>
   );
}

export default Anchor;