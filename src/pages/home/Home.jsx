import { useState } from "react";
import "./home.css"
import NavHome from "../../partials/home/navHome";
import FungsiDisdukCapil from "../../partials/home/fungsiDisdukcapil";

const Home = () => {
   return (
      <section className="w-full h-full py-5 sm:px-5 sm:py-0">
         <NavHome />
         <B1 />
         <B2 />
      </section>
   )
}

const B1 = () => {
   return (
     <div className="w-full h-max flex flex-col flex-wrap px-2">
       <h1 className="text-lg pt-3 pb-2 font-bold">Apa itu DUKCAPIL ?</h1>
       <p className="text-md p-3">
         DISDUKCAPIL merupakan singkatan dari Dinas Kependudukan dan Pencatatan Sipil, yang mempunyai tugas melaksanakan
         urusan administrasi kependudukan di bidang Kependudukan dan Pencatatan Sipil berdasarkan Azas Otonomi dan Tugas Pembantuan.
       </p>
     </div>
   );
}

const B2 = () => {
   const [activeBtn, setActiveBtn] = useState(0);
   return (
     <div className="w-full h-max flex flex-col flex-wrap px-2 text-sm">
       <span className="flex w-full flex-row gap-2 text-xs font-bold">
         <button
           className={`rounded p-3 ${
             activeBtn === 0
               ? "bg-teal-300 dark:bg-teal-900 dark:text-white"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => { setActiveBtn(0); }}
         >
           TUGAS
         </button>
         <button
           className={`rounded p-3 ${
             activeBtn === 1
               ? "bg-teal-300 dark:bg-teal-900 dark:text-white"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => { setActiveBtn(1); }}
         >
           FUNGSI
         </button>
       </span>
       <div className="w-full p-5">
         <FungsiDisdukCapil activeBtn={activeBtn} />
       </div>
     </div>
   );
}

export default Home;