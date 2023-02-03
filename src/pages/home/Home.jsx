import { useState } from "react";
import "./home.css"
import NavHome from "../../partials/home/navHome";

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
               ? "bg-cyan-500"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => {
             setActiveBtn(0);
           }}
         >
           TUGAS
         </button>
         <button
           className={`rounded p-3 ${
             activeBtn === 1
               ? "bg-cyan-500"
               : "bg-slate-300 dark:bg-slate-900 dark:text-white"
           }`}
           onClick={() => {
             setActiveBtn(1);
           }}
         >
           FUNGSI
         </button>
       </span>
       <div className="w-full p-5">
         <p className={`${activeBtn === 0 ? "block" : "hidden"}`}>
           Dinas Kependudukan dan Pencatatan Sipil mempunyai tugas melaksanakan
           urusan administrasi kependudukan di bidang Kependudukan dan
           Pencatatan Sipil berdasarkan Azas Otonomi dan Tugas Pembantuan.
         </p>
         <span className={`w-full ${activeBtn === 1 ? "block" : "hidden"}`}>
           <ul className="px-5 flex flex-col gap-1">
             <li>Penyusunan program dan anggaran</li>
             <li>
               Pengelolaan keuangan, perlengkapan, urusan tata usaha, rumah
               tangga dan barang milik negara, urusan aparatur sipil negara
             </li>
             <li>
               Penyusunan perencanaan pelayanan pendaftaran penduduk, pelayanan
               pencatatan sipil, pengelolaan informasi administrasi
               kependudukan, kerja sama administrasi kependudukan, pemanfaatan
               data dan dokumen kependudukan serta inovasi pelayanan
               administrasi kependudukan
             </li>
             <li>
               Perumusan kebijakan teknis pelayanan pendaftaran penduduk,
               pelayanan pencatatan sipil, pengelolaan informasi administrasi
               kependudukan, kerja sama administrasi kependudukan, pemanfaatan
               data dan dokumen kependudukan serta inovasi pelayanan
               administrasi kependudukan
             </li>
             <li>Pelaksanaan pelayanan pendaftaran penduduk</li>
             <li>Pelaksanaan pelayanan pencatatan sipil</li>
             <li>Pelaksanaanpengelolaan informasi administrasi kependudukan</li>
             <li>Pelaksanaan kerja sama administrasi kependudukan</li>
             <li>Pelaksanaanpemanfaatan data dan dokumen kependudukan</li>
             <li>Pelaksanaan inovasi pelayanan administrasi kependudukan</li>
             <li>Pelaksanaan kegiatan penatausahaan dinas kependudukan dan pencatatan sipil</li>
             <li>Pelaksanaan, koordinasi, pengendalian dan pemberian bimbingan teknis bidangadministrasi kependudukan</li>
             <li>Pelaksanaan pemantauan, evaluasi dan pelaporanbidang administrasi kependudukan</li>
             <li>Pelaksanaan tugas lain yang sesuai dengan ketentuan peraturan perundang-undangan</li>
           </ul>
         </span>
       </div>
     </div>
   );
}

export default Home;