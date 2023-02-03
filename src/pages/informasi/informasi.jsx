import { Outlet } from "react-router-dom";
const Informasi = () => {
  return (
    <div className="w-full h-full block text-center">
      <h1 className="w-full">INFORMASI</h1>
      <Outlet />
    </div>
  );
};

export default Informasi;
