import { HomeIcon } from "@heroicons/react/24/solid";
const NavHome = () => {
   return (
      <div className="flex bg-slate-200 dark:bg-slate-500 dark:text-white text-xs rounded">
         <span className="flex gap-0">
            <p className="flex items-center gap-2 p-3 font-bold bg-slate-300 dark:bg-slate-900">
               <HomeIcon className="w-5 h-5" />
               HOME
            </p>
         </span>
      </div>
   )
}

export default NavHome;