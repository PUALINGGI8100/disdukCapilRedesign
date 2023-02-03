import { Link } from "react-router-dom";
const Anchor = ({ isActive, Icon, text, to, expand, onClick }) => {
   return (
     <Link
       onClick={onClick}
       to={to}
       className={`flex w-full justify-center bg-slate-300 hover:bg-cyan-500 dark:bg-cyan-900 dark:hover:bg-cyan-500 ${isActive?"bg-cyan-900 dark:bg-cyan-300":"text-slate-900 dark:text-slate-100"} ${!expand?"p-3 gap-3 sm:py-4":"p-3 items-center"}`}
     >
       {Icon&&<Icon className="w-6 h-6" />}
       <span className={`w-full text-start ${expand&&Icon ? "hidden" : "block"}`}>{text??<></>}</span>
     </Link>
   );
}

export default Anchor;