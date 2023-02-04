import NavLayanan1 from "../../../partials/layanan/navLayanan1";
import StdLayananDafduk from "../../../partials/layanan/layanan1/dafduk";
import StdLayananCapil from "../../../partials/layanan/layanan1/capil";
import { useState } from "react";
const Layanan1 = () => {
   const [activeLink, setActiveLink] = useState(0);
   return (
      <>
         <NavLayanan1 />
         <div className="flex flex-col sm:flex-row w-full py-5 gap-2">
            <nav className="flex sm:flex-col w-max h-full gap-3">
               <CostumButton active={activeLink===0} onClick={()=>{setActiveLink(0)}} teks="DAFDUK" />
               <CostumButton active={activeLink===1} onClick={()=>{setActiveLink(1)}} teks="CAPIL" />
            </nav>
            <section className="w-full h-full py-5 sm:px-3 sm:py-0">
               {activeLink===0&&<StdLayananDafduk />}
               {activeLink===1&&<StdLayananCapil />}
            </section>
         </div>
      </>
   )
}

const CostumButton = (props) => {
   return (
      <button className={`rounded p-3 sm:px-5 text-xs font-bold ${props.active?"bg-green-300 dark:bg-green-800":"bg-slate-300 dark:bg-slate-900"} hover:bg-green-500 dark:hover:bg-green-500 dark:text-white`} onClick={props.onClick}>
         {props.teks??""}
      </button>
   )
}

export default Layanan1;