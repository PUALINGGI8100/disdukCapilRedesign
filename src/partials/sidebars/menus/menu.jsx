import { useState, useContext, createContext, useMemo, useEffect } from "react"
import MenuCTX from "../../../context/menuCtx";
import Anchor from "./Anchor"
// icons
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, InformationCircleIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, SunIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, BackspaceIcon, PhotoIcon } from "@heroicons/react/24/solid"
// image
import LOGO from "../../../assets/logoDisDukCapil.png";
import MMSLogo from "../../../assets/dinasMMS.png";
// external style
import "./menu.css"

const SubMenuCTX = createContext();

const SubMenuProvider = ({children}) => {
   const [isSomeBtnActive, setIsSomeBtnActive] = useState(false);
   const subMenuMemo = useMemo(() => ({
      isSomeBtnActive, setIsSomeBtnActive
   }), [isSomeBtnActive]);
   return (
      <SubMenuCTX.Provider value={subMenuMemo}>
         {children}
      </SubMenuCTX.Provider>
   )
}

const Menu = () => {
   const [expand, setExpand] = useState(false);
   const [activeLink, setActiveLink] = useState(0);
   const { menuShow, setMenuShow } = useContext(MenuCTX);
   return (
      <SubMenuProvider>
         <span className={`absolute ${!expand&&menuShow?"flex":"hidden"} p-0 m-0 left-0 top-0 w-[100vw] h-full bg-slate-200 backdrop-blur-full opacity-70`}></span>
         <nav className={`relative bg-white dark:bg-slate-900 flex flex-col w-max h-full max-h-full overflow-x-visible`}>
            <div className="relative flex bg-slate-300 w-full p-3 py-5 flex-row flex-wrap gap-2 justify-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 text-sm">
               <span className="w-auto h-max">
                  <img className="w-auto h-6" src={expand?MMSLogo:LOGO} />
               </span>
               <BtnMode expand={expand} />
               <BtnExpand expand={expand} setExpand={setExpand} />
            </div>
            <div className="w-full h-max py-5 flex items-center justify-center">
               <Anchor isActive={activeLink === 1} Icon={BackspaceIcon} text="sembunyikan" expand={expand} onClick={() => {
                  setMenuShow((menuShow) => !menuShow);
               }} />
            </div>
            <div className={`scroll-menu flex flex-col w-full h-full max-w-full max-h-full justify-start items-center ${!expand?"overflow-y-auto":"overvlow-x-visible"}`}>
               <Anchor isActive={activeLink === 0} Icon={HomeIcon} to="/" text="Home" expand={expand} onClick={() => { setActiveLink(0) }} />
               <Anchor isActive={activeLink === 1} Icon={UserIcon} to="/profile" text="profile" expand={expand} onClick={() => { setActiveLink(1) }} />
               <BtnCollapse Icon={WrenchScrewdriverIcon} teks="layanan" expand={expand} menuShow={menuShow}>
                  <Anchor isActive={activeLink===3} to="/layanan/1" text="Standard layanan" expand={expand} onClick={() => { setActiveLink(3) }} />
                  <Anchor isActive={activeLink===4} to="/layanan/2" text="Prosedur dan tata cara pengaduan" expand={expand} onClick={() => { setActiveLink(4) }} />
                  <Anchor isActive={activeLink===5} to="/layanan/3" text="Produk layanan" expand={expand} onClick={() => { setActiveLink(5) }} />
                  <Anchor isActive={activeLink===6} to="/layanan/4" text="SOP Pendaftaran Penduduk" expand={expand} onClick={() => { setActiveLink(6) }} />
               </BtnCollapse>
               <BtnCollapse Icon={InformationCircleIcon} teks="Informasi" expand={expand} menuShow={menuShow}>
                  <Anchor isActive={activeLink===7} to="/informasi/1" text="DPA" expand={expand} onClick={() => { setActiveLink(7) }} />
                  <Anchor isActive={activeLink === 8} to="/informasi/2" text="RENSTRA" expand={expand} onClick={() => { setActiveLink(8) }} />
                  <BtnCollapse teks="DATA" expand={expand} force={true} menuShow={menuShow}>
                     <Anchor isActive={activeLink === 9} to="/informasi/3/1" text="sekertariat" expand={expand} onClick={() => { setActiveLink(9) }} />
                     <Anchor isActive={activeLink === 10} to="/informasi/3/2" text="DAFDUK" expand={expand} onClick={() => { setActiveLink(10) }} />
                     <Anchor isActive={activeLink === 11} to="/informasi/3/3" text="CAPIL" expand={expand} onClick={() => { setActiveLink(11) }} />
                  </BtnCollapse>
               </BtnCollapse>
               <Anchor isActive={activeLink === 12} Icon={ChatBubbleLeftRightIcon} to="/pengaduan" text="Pengaduan" expand={expand} onClick={() => { setActiveLink(12) }} />
               <Anchor isActive={activeLink === 13} Icon={ClipboardDocumentListIcon} to="/survey" text="Survey" expand={expand} onClick={() => { setActiveLink(13) }} />
               <Anchor isActive={activeLink === 14} Icon={PhotoIcon} to="/galery" text="Galeri" expand={expand} onClick={() => { setActiveLink(14) }} />
            </div>
         </nav>
      </SubMenuProvider>
   )
}

const BtnExpand = ({ expand,setExpand }) => {
   return (
      <button className={`${expand?"w-full":"w-auto"} flex items-center justify-center hover:cursor-pointer`} title={expand?"perluas":"perkecil"} onClick={() => {
         setExpand((expand)=>!expand)
      }}>
         {expand?<ArrowsPointingOutIcon className="w-4 h-4 sm:w-6 sm:h-6" />:<ArrowsPointingInIcon className="w-4 h-4 sm:w-6 sm:h-6" />}
      </button>
   )
}
const BtnCollapse = ({children, Icon, teks, expand, force, menuShow}) => {
   const [show, setShow] = useState(false);
   return (
     <span className="relative flex flex-col w-full max-w-full">
       <span
         className="relative flex max-w-full flex-row p-3 items-center flex w-full justify-center dark:text-slate-100 dark:bg-slate-900 hover:cursor-pointer"
         onClick={() => {
            setShow((show) => !show);
         }}
       >
         <span
           className={`flex flex-row items-center ${
             !expand ? "w-full gap-2" : "w-max"
           }`}
         >
           {Icon && <Icon className="w-4 h-4" />}
           {(!expand || force) && teks}
         </span>
         {show ? (
           !expand ? (
             <ChevronUpIcon className="w-4 h-4" />
           ) : (
             <ChevronLeftIcon className="w-4 h-4" />
           )
         ) : !expand ? (
           <ChevronDownIcon className="w-4 h-4" />
         ) : (
           <ChevronRightIcon className="w-4 h-4" />
         )}
       </span>
       <span
         className={`${expand ? "absolute w-max" : "static w-auto"} ${
           show&&menuShow ? "flex" : "hidden"
         } flex-col p-2 flex bg-slate-50 rounded gap-1 left-full top-0 dark:text-slate-100 dark:bg-slate-700`}
       >
         {children}
       </span>
     </span>
   );
}
const BtnMode = ({ expand }) => {
   const [mode, setMode] = useState("light");
   const [show, setShow] = useState(false);
   return (
      <div
         className={`relative flex items-center justify-center h-auto ${expand ? "w-full" : "w-auto"} ${mode === "light" ? "text-yellow-400" : "text-yellow-600"} hover:cursor-pointer overflow-visible`}
         title="tema"
         // title={`${mode==="light"?"tampilan gelap":"tampilan terang"}`}
         onClick={() => {
            setShow((show) => !show);
         }}
      >
         {mode === "light" ?
            <SunIcon className="w-4 h-4 sm:w-5 sm:h-5" />:
            <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5" />
         }
         <span className={`${show ? "absolute" : "hidden"} left-0 top-0 w-max h-max bg-slate-900 dark:bg-slate-200 z-50 rounded text-xs`}>
            <button className="flex flex-row items-center w-full gap-1 h-max p-2" title="tampilan terang" onClick={() => {
               if (mode === "dark") {
                  setMode("light");
                  document.querySelector("html").classList.toggle("dark");
               }
            }}>
               <SunIcon className="w-3 h-3 sm:w-4 sm:h-4" />
               Terang
            </button>
            <button className="flex fs-sm flex-row items-center gap-1 w-full h-max p-2" title="tampilan gelap" onClick={() => {
               if (mode === "light") {
                  setMode("dark");
                  document.querySelector("html").classList.toggle("dark");
               }
            }}>
               <MoonIcon className="w-3 h-3 sm:w-4 sm:h-4" />
               Gelap
            </button>
         </span>
      </div>
   )
}

export default Menu;