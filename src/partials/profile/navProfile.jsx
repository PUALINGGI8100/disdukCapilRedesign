import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
const NavProfile = () => {
  return (
    <div className="flex dark:text-white text-xs rounded">
      <span className="flex gap-0">
        <p className="flex items-center gap-2 p-3 pr-10 font-bold bg-cyan-500 dark:bg-cyan-900 rounded-tr-full rounded-br-full">
          <BuildingOfficeIcon className="w-5 h-5" />
          PROFIL
        </p>
      </span>
    </div>
  );
};

export default NavProfile;
