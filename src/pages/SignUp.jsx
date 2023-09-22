import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app, provider } from "../firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import signupimg from "../assets/signup.png";
import { FaGoogle} from "react-icons/fa";
import toast from "react-hot-toast";
import Logo from "../components/Logo";

const auth = getAuth(app);
const SignUp = () => {
  const [data, setdata] = useState({
    name: "",
    pass: "",
  });
  let nav = useNavigate();
  async function signup(e) {
    e.preventDefault();
    if(data.pass.length<=5){
      toast.error("Password must contain 6 characters")
    }
    try {
      const userDt = await createUserWithEmailAndPassword(
        auth,
        data.name,
        data.pass
      );
      console.log(userDt);
      const user = userDt.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login Successfull")
      nav("/");
    } catch (error) {
      console.log(error);
      // toast.error(error)
    }
  }
  async function handlegoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user.accessToken);
      localStorage.setItem("token", res.user.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      nav("/");
      toast.success("Login Successfull")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center mx-auto px-4 justify-center h-[100vh] max-w-[1300px] ">
      <div className="flex flex-col sm:flex-row w-full shadow-xl md:w-[60%] py-4 rounded-md border-2 border-green-300">
        <div className="flex flex-col flex-grow items-center justify-center flex-1 ">
          <Logo/>
          <p className="md:text-md font-normal m-0.5">
            Your Ultimate Note Companion
          </p>
          <img src={signupimg} alt="" className="md:w-[650px] w-80" />
        </div>
        <div className="w-full self-center flex flex-col gap-3 flex-1">
          <h1 className="text-center text-2xl font-bold ">Sign Up!</h1>
          <form
            onSubmit={(e) => signup(e)}
            className="text-center justify-center w-full px-5 flex gap-4  flex-col"
          >
            <input
              type="email"
              required
              placeholder="Enter Email"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
              className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 p-1 shadow-md text-green-600"
            />
            <input
              type="text"
              required
              placeholder="Enter Password"
              value={data.pass}
              className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 p-1 shadow-md text-green-600"
              onChange={(e) => setdata({ ...data, pass: e.target.value })}
            />
            <button
              
              type="submit"
              className="bg-[#1fbf66] text-white p-1 mt-2  w-1/2 shadow-2xl mx-auto hover:scale-110 duration-200 "
            >
              SignUp{" "}
            </button>
            <span>
              {" "}
              Already A User?{" "}
              <Link
                to={"/signin"}
                className="text-green-600 underline font-semibold"
              >
                LogIn
              </Link>
            </span>  
            <p className="m-[-13px]">or</p>       
            <button
              onClick={handlegoogle}
              className="bg-blue-500 px-4 text-white flex items-center gap-2 p-1 px-2 mx-auto hover:shadow-xl duration-200">
              <span className="">
                <FaGoogle />
              </span>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
