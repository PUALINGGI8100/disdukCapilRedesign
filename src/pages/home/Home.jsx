import { useState } from "react";
import "./home.css"
import NavHome from "../../partials/home/navHome";
import FungsiDisdukCapil from "../../partials/home/fungsiDisdukcapil";

const Home = () => {
   return (
      <section className="flex flex-col w-full h-full gap-5 py-5 sm:px-5 sm:py-0">
         <NavHome />
         <B1 />
         <B2 />
      </section>
   )
}

const B1 = () => {
   return (
     <div className="w-full mt-3 h-max flex flex-col flex-wrap px-2 rounded-lg gap-5">
       <h1 className="text-lg font-bold">Apa itu DISDUKCAPIL ?</h1>
       <p className="text-md p-5 bg-white rounded-lg bg-slate-300 dark:bg-slate-900 dark:text-white">
         DISDUKCAPIL merupakan singkatan dari Dinas Kependudukan dan Pencatatan Sipil, yang mempunyai tugas melaksanakan
         urusan administrasi kependudukan di bidang Kependudukan dan Pencatatan Sipil berdasarkan Azas Otonomi dan Tugas Pembantuan.
       </p>
     </div>
   );
}

const B2 = () => {
   const [activeBtn, setActiveBtn] = useState(0);
   return (
     <div className="w-full h-max flex flex-col flex-wrap px-2 text-sm gap-5">
       <span className="flex w-full flex-row gap-2 text-xs font-bold">
         <button
           className={`rounded p-3 hover:bg-green-500 dark:hover:bg-green-500 ${
             activeBtn === 0
               ? "bg-green-300 dark:bg-green-900 dark:text-white"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => { setActiveBtn(0); }}
         >
           TUGAS
         </button>
         <button
           className={`rounded p-3 hover:bg-green-500 dark:hover:bg-green-500 ${
             activeBtn === 1
               ? "bg-green-300 dark:bg-green-900 dark:text-white"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => { setActiveBtn(1); }}
         >
           FUNGSI
         </button>
       </span>
       <div className="w-full p-5 rounded-lg bg-slate-300 dark:text-white dark:bg-slate-900">
         <FungsiDisdukCapil activeBtn={activeBtn} />
       </div>
     </div>
   );
}

export default Home;