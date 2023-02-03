import alamat from "../../../assets/alamat.jpg"
import { GlobeAltIcon, EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/solid";
const Alamat = () => {
   return (
     <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow lg:flex-row dark:border-gray-700 dark:bg-gray-800 w-full sm:w-1/2 md:w-1/2 lg:w-2/4 h-max">
       <div className="block min-h-full bg-slate-500">
          <img
            className="flex object-cover w-full rounded-t-lg h-full lg:w-48 lg:rounded-none lg:rounded-l-lg"
            src={alamat}
          />
       </div>
       <div className="flex flex-col justify-start p-4 leading-normal gap-2 h-max">
         <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white sm:text-md md:text-md lg:text-lg">
           DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KABUPATEN MAMASA
         </h5>
         <div className="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-400 gap-3 text-xs sm:text-sm md:text-sm lg:text-md">
           <span className="flex w-full h-max gap-3">
             <GlobeAltIcon className="w-5 h-5" />
             <p className="flex flex-wrap w-full h-max">
               Jalan Pors Polewali-Mamasa Rante-rante Kecamatan Mamasa Kabupaten
               Mamasa Sulbar
             </p>
           </span>
           <span className="flex w-full h-max gap-3">
             <EnvelopeIcon className="w-5 h-5" />
             <p className="flex flex-wrap w-full h-max">
               mamasaducapil287@gmail.com
             </p>
           </span>
           <span className="flex w-full h-max gap-3">
             <IdentificationIcon className="w-5 h-5" />
             <p className="flex flex-wrap w-full h-max">081373117775</p>
           </span>
         </div>
       </div>
     </div>
   );
}

export default Alamat;