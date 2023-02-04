import femaleImg from "../../../assets/unknownFemale.png";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "./global.css";
import { KKBaru, UbahKK, TambahKurangKK, PenguranganKK, KTPBaru, GantiKTP, KIA, SKPWNI, SKDWNI, SKTT, prosedur, produk, pengaduan } from "./dataDAFDUK";
import { CostumOL, CostumUL } from "./utils";

const StdLayananDafduk = () => {
   return (
      <div className="flex flex-col gap-2 sm:gap-4">
         <PersyaratanPelayananCard />
         <SMPDPCard />
         <WPelayananCard />
         <BPelayananCard />
         <PPCard />
         <h2 className="font-bold text-lg sm:text-xl">
            PENGADUAN
         </h2>
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
            <span className="flex items-center w-full text-xs sm:text-sm h-max gap-2">
               <AtSymbolIcon className="w-5 h-5" />
               {nama}
            </span>
            <span className="flex items-center w-full text-xs sm:text-sm h-max gap-2">
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
            <li className="list-inside p-1 font-bold">Kartu Keluarga (KK) Baru</li>
            <CostumUL arr={KKBaru} />
            <li className="p-1 list-inside font-bold">Perubahan Kartu Keluarga (KK)</li>
            <CostumUL arr={UbahKK} />
            <li className="p-1 list-inside font-bold">Penambahan/pengurangan Kartu Keluarga (KK)</li>
            <CostumUL arr={TambahKurangKK} />
            <li className="p-1 list-inside font-bold">Pengurangan Kartu Keluarga (KK)</li>
            <CostumUL arr={PenguranganKK} />
            <li className="p-1 list-inside font-bold">Kartu tanda penduduk (KTP) baru</li>
            <CostumUL arr={KTPBaru} />
            <li className="p-1 list-inside font-bold">Pergantian Kartu tanda penduduk (KTP)</li>
            <CostumUL arr={GantiKTP} />
            <li className="p-1 list-inside font-bold">Kartu Identitas Anak (KTP)</li>
            <CostumUL arr={KIA} />
            <li className="p-1 list-inside font-bold">Surat keteragan pindah penduduk (SKPWNI)</li>
            <CostumUL arr={SKPWNI} />
            <li className="p-1 list-inside font-bold">Surat keteragan pindah datang (SKDWNI)</li>
            <CostumUL arr={SKDWNI} />
            <li className="p-1 list-inside font-bold">Surat keteragan tempat tinggal (SKTT)</li>
            <CostumUL arr={SKTT} />
         </ol>
      </div>
   )
}

export default StdLayananDafduk;