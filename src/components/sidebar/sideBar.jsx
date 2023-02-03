import LogoSideBar from "../../partials/sidebars/logo/logoSideBar";
import "./sidebar.css";
import Menu from "../../partials/sidebars/menus/menu";

const SideBar = () => {
   return (
     <div className="sideBar bg-slate-300 dark:bg-slate-900 w-full max-w-[160px] sm:max-w-[30%] md:max-w-[20%] h-[100vh] max-h-[100vh]">
       {/* <LogoSideBar /> */}
       <Menu />
     </div>
   );
}

export default SideBar;