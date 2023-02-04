import {
  WrenchScrewdriverIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
const NavLayanan2 = () => {
  return (
    <div className="flex dark:text-white text-xs rounded">
      <span className="flex gap-0 items-center font-bold bg-cyan-500 dark:bg-cyan-900 rounded-tr-full rounded-br-full p-3 pr-10">
        <p className="flex items-center gap-2">
          <WrenchScrewdriverIcon className="w-5 h-5" />
          LAYANAN
        </p>
        <p className="flex items-center gap-1 uppercase">
          <ChevronRightIcon className="w-5 h-5" />
          Produk Layanan
        </p>
      </span>
    </div>
  );
};

export default NavLayanan2;
