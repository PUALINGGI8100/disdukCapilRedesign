import { useContext } from "react"
import MenuCTX from "../../context/menuCtx"
const Container = ({ children }) => {
   const { menuShow } = useContext(MenuCTX);
   return (
      <div className={`absolute ${menuShow?"left-0":"right-full"} top-0 h-max w-max bg-slate-100 dark:bg-red-300`}>
         {children}
      </div>
   )
}

export default Container