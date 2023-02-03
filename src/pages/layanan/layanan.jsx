import { Outlet } from "react-router-dom";
const Layanan = () => {
   return (
      <div className="w-full h-full block text-center">
         <h1 className="w-full">LAYANAN</h1>
         <Outlet />
      </div>
   );
}

export default Layanan;