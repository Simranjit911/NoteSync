import  { useContext } from "react";
import UserContext from "./UserContext";
import { RxCross1 } from "react-icons/rx";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";

const AddNote = () => {
  const { setaddnote,id,val,setval,des,setdes,setid } = useContext(UserContext);
  let user = JSON.parse(localStorage.getItem("user"));
  const collectionRef = collection(db, `users/${user.uid}/notes`);
  async function add() {
    try {
      if (id === "") {
        if(val.length>=30)return toast.error("Title Must Less than 30 characters")
        if(val.length<5)return toast.error("Title Must Contain 5 characters")
        if(des.length<5)return toast.error("Description Must Contain 5 characters")
        setaddnote(false)
        await addDoc(collectionRef, { val, des });
        setval("");
        setdes("");
        toast.success("Note Created!")
      } else {
        if(val.length>=30)return toast.error("Title Must Less than 30 characters")
        if(val.length<5)return toast.error("Title Must Contain 5 characters")
        if(des.length<5)return toast.error("Description Must Contain 5 characters")
        const updated = doc(db, `users/${user.uid}/notes`, id);
        updateDoc(updated, { val, des });
        toast.success("Note Updated!")
        setaddnote(false)
        setval("");
        setdes("");
        setid("");
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className="mx-auto  flex justify-center px-3 delay-100 ease-in transition-all duration-100">
      <div className="absolute w-full mx-2 top-16 px-2 shadow-2xl py-2 left-auto h-fit pb-5 border md:w-[60%] mx-auto  z-10 bg-green-100 ">
        <div className="flex flex-col justify-center mx-auto sm:px-10">
          <button onClick={() =>{
            setaddnote(false)
            setdes("")
            setval("")
            setid("")
          }} className='self-start text-lg   font-bold m-2'>
            <RxCross1 />
          </button>
          <div className="w-full self-center flex flex-col gap-3 flex-1">
            <h1 className="text-center text-2xl font-bold ">{id?"Update Note":"Add Note"}</h1>
            <div className="text-center justify-center w-full px-5 flex gap-4 md:w-[100%] mx-auto flex-col" >
              <input
                type="text"
                required
                placeholder="Title"
                value={val}
                onChange={(e) => setval(e.target.value)}
                className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 py-2 shadow-md text-green-600"
              />
              <textarea
                type="text"
                rows="5"
            cols="10"
                placeholder="Description"
                value={des}
                className="border-2 border-transparent focus:border-2 focus:border-[#1fbf66] outline-none px-2 p-1 shadow-md text-green-600"
                onChange={(e) => setdes(e.target.value)}
              />
              <button
                onClick={add}
                type="submit"
                className="bg-[#1fbf66] text-white p-1 mt-2  w-1/2 shadow-2xl mx-auto hover:scale-110 duration-200 ">
                {id?"Update Note":"Add Note"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
