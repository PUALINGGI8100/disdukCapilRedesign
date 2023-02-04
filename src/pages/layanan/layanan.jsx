import { Outlet } from "react-router-dom";
const Layanan = () => {
   return (
      <section className="w-full h-full border-0 shadow-0 block py-5 sm:px-5 sm:py-0">
         <Outlet />
      </section>
   );
}

export default Layanan;