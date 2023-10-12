import { useContext } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import UserContext from "./UserContext";

const Hero = () => {
  const { searchVal, setsearchVal, setaddnote } = useContext(UserContext);
  function containNumber(email) {
    const regex = /[0-9]/;
    return regex.test(email);
  }
  function extractEmailfromNum(email) {
    const name = email.replace(/[0-9]/g, " ");
    return extractEmail(name.trim());
  }
  function extractEmail(email) {
    let idx = email.indexOf("@");
    let name = email.slice(0, idx);
    return name;
  }
  let user = JSON.parse(localStorage.getItem("user"));
  let ans = containNumber(user.email);

  let username = ans
    ? extractEmailfromNum(user.email)
    : extractEmail(user.email);

  return (
    <div>
      <div className="max-w-[1250px] px-3 sm:px-6 items-center mt-3 sm:mt-5 mx-auto flex justify-between">
        <p className="capitalize sm:text-xl">
          Welcome,<span className="italic font-bold">{username}</span>
        </p>
        <input
          type="search"
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value.toLowerCase())}
          placeholder="Search Note"
          className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 py-0.5 shadow-md text-green-600 w-[0.1%] md:w-1/2 invisible md:visible"
        />
        <button
          onClick={() => setaddnote(true)}
          className="flex items-center sm:text-lg font-semibold hover:scale-105 duration-100"
        >
          <AiOutlineFileAdd /> New Note
        </button>
      </div>
      <div className="w-full md:invisible mx-auto px-8 sm:px-16 my-2 ">
        <input
          type="search"
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value.toLowerCase())}
          placeholder="Search Note"
          className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 py-0.5 shadow-md text-green-600  w-full  mx-auto md:invisible"
        />
      </div>
    </div>
  );
};

export default Hero;
