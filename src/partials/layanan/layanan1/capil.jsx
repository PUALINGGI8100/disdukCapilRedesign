import femaleImg from "../../../assets/unknownFemale.png";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "./global.css";
import { CostumUL, CostumOL } from "./utils";
import { aktaLahir, aktaMati, aktaCerai, aktaKawin, aktaPengakuanAnak, aktaPengesahanAnak, RBAktaCapil, pengangkatanAnak, SKCapil, prosedur, produk, pengaduan} from "./dataCAPIL";

const StdLayananCapil = () => {
   return (
      <div className="flex flex-col gap-2 sm:gap-4">
         <PersyaratanPelayananCard />
         <SMPDPCard />
         <WPelayananCard />
         <BPelayananCard />
         <PPCard />
         {pengaduan.map((v, i) => {
            return <CardPengaduan key={i} nama={v.nama} posisi={v.posisi} hp={v.hp} foto={femaleImg} />
         })}
      </div>
   )
}

const CardPengaduan = ({nama, posisi, hp, foto}) => {
   return (
      <div className="flex w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg gap-3 sm:gap-5">
         <img src={foto} className="w-[50px] h-[50px] sm:h-[100px] sm:w-[100px]" />
         <div className="grow flex flex-col gap-2">
            <h2 className="font-bold text-md sm:text-lg">{posisi}</h2>
            <span className="flex items-center text-xs sm:text-sm w-full h-max gap-2">
               <AtSymbolIcon className="w-5 h-5" />
               {nama}
            </span>
            <span className="flex items-center text-xs m:text-sm w-full h-max gap-2">
               <PhoneIcon className="w-5 h-5" />
               {hp}
            </span>
         </div>
      </div>
   )
}

const PPCard = () => {
   return (
      <div className="flex flex-col w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg">
         <h2 className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl">Produk Layanan</h2>
         <CostumUL arr={produk} />
      </div>
   )
}

const BPelayananCard = () => {
   return (
      <div className="flex flex-col w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg">
         <h2 className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl">Biaya/Tarif Pelayanan</h2>
         <p className="px-5">GRATIS</p>
      </div>
   )
}
const WPelayananCard = () => {
   return (
      <div className="flex flex-col w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg">
         <h2 className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl">Jangka Waktu Pelayanan</h2>
         <p className="px-5">1-2 Jam</p>
      </div>
   )
}

const SMPDPCard = () => {
   return (
      <div className="flex flex-col w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg">
         <h2 className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl">Sistem Mekanisme dan Prosedur</h2>
         <CostumOL arr={prosedur} />
      </div>
   )
}

const PersyaratanPelayananCard = () => {
   return (
      <div className="flex flex-col w-full h-full bg-slate-300 dark:bg-slate-800 dark:text-white p-5 px-8 lg:px-10 rounded-lg">
         <h2 className="font-bold mb-2 sm:mb-4 text-xl sm:text-2xl">Persyaratan Pelayanan</h2>
         <ol className="flex flex-col gap-2 px-3 sm:px-5">
            <li className="list-inside p-1 font-bold">Akta Kelahiran</li>
            <CostumUL arr={aktaLahir} />
            <li className="p-1 list-inside font-bold">Akta Kematian</li>
            <CostumUL arr={aktaMati} />
            <li className="p-1 list-inside font-bold">Akta Perkawinan</li>
            <CostumUL arr={aktaKawin} />
            <li className="p-1 list-inside font-bold">Akta Perceraian</li>
            <CostumUL arr={aktaCerai} />
            <li className="p-1 list-inside font-bold">Akta Pengakuan Anak</li>
            <CostumUL arr={aktaPengakuanAnak} />
            <li className="p-1 list-inside font-bold">Akta Pengesahan Anak</li>
            <CostumUL arr={aktaPengesahanAnak} />
            <li className="p-1 list-inside font-bold">Perubahan/Pembatalan Akta Pencatatan Sipil</li>
            <CostumUL arr={RBAktaCapil} />
            <li className="p-1 list-inside font-bold">Pengangkatan Anak</li>
            <CostumUL arr={pengangkatanAnak} />
            <li className="p-1 list-inside font-bold">Surat keteragan pencatatan Sipil</li>
            <CostumUL arr={SKCapil} />
         </ol>
      </div>
   )
}

export default StdLayananCapil;