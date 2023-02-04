import kadisPicture from "../../../assets/pakKadis.png"
const CardKadis = () => {
   return (
      <div className="flex flex-col w-full p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
         className="w-[100px] h-[100px] mb-2 self-center" src={kadisPicture}
         />
         <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Kepala Dinas kependudukan Dan Pencatatan Sipil Kabupaten MAMASA
         </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
         Selamat datang di website kami
      </p>
      </div>
   )
}

export default CardKadis;