import alamat from "../../../assets/alamat.jpg"
import { GlobeAltIcon, EnvelopeIcon, IdentificationIcon } from "@heroicons/react/24/solid";
const Alamat = () => {
   return (
     <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       <img
         className="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
         src={alamat}
       />
       <div className="flex flex-col justify-between p-4 leading-normal gap-2">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KABUPATEN MAMASA
         </h5>
         <div className="flex flex-col mb-3 font-normal text-gray-700 dark:text-gray-400 gap-3">
           <span className="flex w-full h-max gap-3">
             <GlobeAltIcon className="w-5 h-5" />
             <p className="w-full h-max">
               Jalan Pors Polewali-Mamasa Rante-rante Kecamatan Mamasa Kabupaten
               Mamasa Sulbar
             </p>
           </span>
           <span className="flex w-full h-max gap-3">
             <EnvelopeIcon className="w-5 h-5" />
             <p className="w-full h-max">mamasaducapil287@gmail.com</p>
           </span>
           <span className="flex w-full h-max gap-3">
             <IdentificationIcon className="w-5 h-5" />
             <p className="w-full h-max">081373117775</p>
           </span>
         </div>
       </div>
     </div>
   );
}

export default Alamat;