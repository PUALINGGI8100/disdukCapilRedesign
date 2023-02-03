import logoTop from "../../assets/logotop.png";
import "./HTop.css";
const HTop = () => {
   return (
      <div className="sticky img-h-top flex w-full h-[60px] sm:h-[80px] bg-slate-100 dark:bg-slate-900">
         <img src={logoTop} className="w-full h-full" />
      </div>
   )
}

export default HTop;