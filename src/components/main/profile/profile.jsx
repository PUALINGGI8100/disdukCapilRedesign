import "./profile.css";
import NavProfile from "../../../partials/profile/navProfile";
import Struktur from "../../../partials/profile/struktur";
import ViMisi from "../../../partials/profile/vimisi";
import Motto from "../../../partials/profile/motto";
import Maklumat from "../../../partials/profile/maklumat";
const Profile = () => {
   return (
      <section className="w-full h-full py-5 sm:px-5 sm:py-0">
         <NavProfile />
         <div className="w-full flex flex-col gap-2 mt-5">
            <Struktur />
            <ViMisi />
            <Motto />
            <Maklumat />
         </div>
      </section>
   )
}

export default Profile;