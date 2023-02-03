import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import strukturImg from "../../assets/struktur.jfif"
const Struktur = () => {
   const [expand, setExpand] = useState(false);
   return (
      <div className="w-full flex flex-col text-slate-900 dark:text-white">
         <button className="flex items-center rounded-sm p-3 sm:p-5 bg-teal-200 dark:bg-teal-900" onClick={()=>{setExpand((expand)=>!expand)}}>
            <span className="block text-start text-xs sm:text-sm font-bold grow">
               Struktur OPD
            </span>
            {expand?<ChevronUpIcon className="w-5 h-5" />:<ChevronDownIcon className="w-5 h-5" />}
         </button>
         {expand&&<Child />}
      </div>
   )
}

const Child = () => {
   return (
      <div className="block p-3 sm:p-5 w-full h-max bg-slate-500">
         <img className="w-full h-auto" src={strukturImg} />
      </div>
   )
}

export default Struktur;