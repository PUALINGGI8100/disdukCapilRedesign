import { useContext } from "react";
import { LayananCTX, InformasiCTX } from "./collapseCTX";
import { ChevronRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid"
const BtnLayanan = ({ children, expand, active }) => {
   const { isLayananActive, setIsLayananActive } = useContext(LayananCTX);
   const { isInformasiActive, setIsInformasiActive } = useContext(InformasiCTX);
   return (
      <div className={`layanan-collapse flex flex-col ${!expand?"w-full gap-3":"w-full"} dark:text-white ${active&&"bg-cyan-600 dark:bg-cyan-300"}`}>
         <button className={`flex items-center w-full p-3 ${active&&"dark:text-slate-900"}`} onClick={
            async ()=>{
               await setIsInformasiActive(false);
               await setIsLayananActive((v)=>!v);
            }
         }>
            <span className={`grow flex justify-start gap-3 items-center`}>
               <WrenchScrewdriverIcon className={`${!expand?"w-5 h-5":"w-4 h-4"}`} />
               <p className={`${expand ? "hidden" : "block"}`}>Layanan</p>
            </span>
            {!expand && isLayananActive && <ChevronUpIcon className={`${!expand ? "w-5 h-5" : "w-4 h-4"}`} />}
            {!expand && !isLayananActive && <ChevronDownIcon className={`${!expand ? "w-5 h-5" : "w-4 h-4"}`} />}
            {expand && isLayananActive && <ChevronLeftIcon className={`${!expand ? "w-5 h-5" : "w-4 h-4"}`} />}
            {expand && !isLayananActive && <ChevronRightIcon className={`${!expand ? "w-5 h-5" : "w-4 h-4"}`} />}
         </button>
         <span className={`${!expand?(isLayananActive?"static w-full":"hidden"):(isLayananActive?"absolute left-full w-max":"hidden")} flex flex-col layanan-inside h-max p-3 bg-slate-900 dark:bg-slate-200 gap-1 ${expand?"rounded":"rounded-0"}`}>
            {children}
         </span>
      </div>
   )
}

export default BtnLayanan