import { useContext } from "react"
import MenuCTX from "../../../context/menuCtx"
import waLogo from "../../../assets/wa.png"
import { ListBulletIcon } from "@heroicons/react/24/solid";
const BtnShowHide = () => {
   const {menuShow, setMenuShow} = useContext(MenuCTX);
   const waLink = "https://api.whatsapp.com/send?phone=+6285298777298&text=Halo%20Admin,%20Saya%20butuh%20info,%20Mohon%20dibantu";
   return (
      <div className="relative p-0 absolute flex flex-col items-start left-0 h-[100vh] w-[5px] bg-slate-500 dark:bg-slate-900 text-slate-900 dark:text-slate-100 gap-2 py-5">
         <button className="flex items-center text-slate-900 justify-center p-2 rounded bg-slate-300 dark:bg-slate-900 dark:text-white" onClick={()=>{ setMenuShow((menuShow)=>!menuShow) }}>
            <ListBulletIcon className="w-5 h-5 sm:w-8 sm:w-8" />
         </button>
         <a className="flex w-max h-max items-centter justify-center p-2 rounded bg-slate-300 dark:bg-slate-900" href={waLink} target="_blank">
            <img src={ waLogo } className="w-5 h-5 sm:w-8 sm:h-8" />
         </a>
      </div>
   )
}

export default BtnShowHide;