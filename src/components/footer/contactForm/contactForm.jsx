import { useState } from "react";
import { EnvelopeIcon, IdentificationIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ContactForm = ()=>{
   const [mail, setMail] = useState("");
   const [nama, setNama] = useState("");
   const [pesan, setPesan] = useState("");
   return (
      <div className="rounded grow order-0 sm:order-1 p-5 bg-slate-200 dark:bg-gray-800">
         <div className="mb-3">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               E-mail :
            </label>
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <EnvelopeIcon className="w-5 h-5 dark:text-white" />
               </div>
               <input value={mail} type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abcdefg@gmail.com" onChange={(e) => {
                  setMail(e.target.value);
               }} />
            </div>
         </div>
         {/* NAME input */}
         <div className="mb-3">
            <label htmlFor="name-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Nama Lengkap :
            </label>
            <div className="relative">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IdentificationIcon className="w-5 h-5 dark:text-white" />
               </div>
               <input value={nama} type="text" id="name-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama lengkap anda" onChange={(e) => {
                  setNama(e.target.value)
               }} />
            </div>
         </div>
         {/* TEKS input */}
         <div className="mb-3">
            <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               Pesan :
            </label>
            <textarea id="pesan" value={pesan} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[80px] max-h-[150px]" placeholder="pesan anda" onChange={(e)=>{setPesan(e.target.value)}}></textarea>
         </div>
         {/* BUTTON submit */}
         <div className="mb-3">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
               <span className="relative flex item-center justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0 gap-2">
                  <PaperAirplaneIcon className="w-5 h-5" />
                  kirim
               </span>
            </button>
         </div>
      </div>
   )
}

export default ContactForm;