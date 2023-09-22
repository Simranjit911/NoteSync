import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Logo from "./Logo";
const Navbar = () => {
  let nav = useNavigate();
  async function handleLog() {
    signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logut Successfully");
    nav("/signin");
  }

  return (
    <div>
      <nav className="bg-green-300 flex justify-between px-4 sm:justify-around  md:px-3 pt-3  py-3 shadow-2xl ">
        <Logo className="w-28 object-contain md:w-32" />
        <div className="flex gap-2">          
          <button
            onClick={handleLog}
            className="text-green-800  px-2 border-green-800 border-2 hover:text-white hover:border-white  shadow-lg "
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
