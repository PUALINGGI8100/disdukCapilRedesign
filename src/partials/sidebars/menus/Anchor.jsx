import { Link } from "react-router-dom";
const Anchor = ({ isActive, Icon, text, to, expand, onClick }) => {
   return (
     <Link
       onClick={onClick}
       to={to}
       className={`flex w-full items-center justify-center bg-slate-300 ${isActive?"text-lime-900 dark:text-lime-300":"text-slate-900 dark:text-slate-100"} p-3 dark:bg-cyan-900 p-2`}
     >
       {Icon&&<Icon className="w-6 h-6 pr-2" />}
       <span className={`w-full ${expand&&Icon ? "hidden" : "block"}`}>{text??<></>}</span>
     </Link>
   );
}

export default Anchor;