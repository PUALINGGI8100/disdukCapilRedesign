import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import mottoImg from "../../assets/motto.jpeg"
const Motto = () => {
   const [expand, setExpand] = useState(false);
   return (
      <div className="w-full flex flex-col text-slate-900 dark:text-white">
         <button className="flex items-center rounded-sm p-3 sm:p-5 bg-green-300 dark:bg-green-500" onClick={()=>{setExpand((expand)=>!expand)}}>
            <span className="block text-start text-xs sm:text-sm font-bold grow">
               MOTTO
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
         <img className="w-full h-auto" src={mottoImg} />
      </div>
   )
}

export default Motto;