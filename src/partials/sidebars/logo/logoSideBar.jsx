import LOGO from "../../../assets/logo.png";
const LogoSideBar = () => {
   return (
      <div className="flex flex-row w-full h-max">
         <a href="/" to="/" className="flex w-full h-max p-3 sm:p-5">
            <img src={LOGO} className="w-full h-auto" />
         </a>
      </div>
   )
}

export default LogoSideBar;