import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import UserContext from "./UserContext";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import {GrFormView} from "react-icons/gr"
import Loader from "./Loader";

const Notes = () => {
  const { searchVal,data, setid, setupdatedata, setaddnote ,setview} = useContext(UserContext);
  let user = JSON.parse(localStorage.getItem("user"));
  async function update(id) {
    setid(id);
    const updated = doc(db, `users/${user.uid}/notes`, id);
    getDoc(updated).then((doc) => {
      setupdatedata(doc.data());
    });
 
    //  let res  =await getDoc(updated)
    //  console.log(res._document.data.value.mapValue.fields.des.stringValue)
    //  console.log(res._document.data.value.mapValue.fields.val.stringValue)
    //  setval(res._document.data.value.mapValue.fields.val.stringValue)
    //  setdes(res._document.data.value.mapValue.fields.des.stringValue)
  }
  async function del(id) {
    const deldata = doc(db, `users/${user.uid}/notes`, id);
    await deleteDoc(deldata);
    toast.success("Note Deleted!");
  }
  let newdes = "";
  return (
    <div className="grid my-6 sm:my-8 sm:px-7 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1250px] mx-auto gap-5 grid">
      {data.length > 0 ? (
        data.filter((i)=>{
          return searchVal.toLowerCase()===""?i:i.val.toLowerCase().includes(searchVal)
        }).map((d) => {
          return (
            <div
              key={d.id}
              className="border-2 cursor-pointer hover:scale-105 duration-200  border-green-300 min-h-[150px] sm:min-h-[200px]  flex flex-col px-3 py-1 shadow-xl"
            >
              <div className="self-end flex items-center gap-1">
                <button
                  className="text-black text-2xl hover:scale-105 duration-100 "
                  onClick={() =>{
                    setview(true)
                    update(d.id)
                  }}
                  >
                  {" "}
                  <GrFormView/>
                </button>
                <button
                  className="text-black text-xl hover:scale-105 duration-100 "
                  onClick={() =>{
                    setaddnote(true)
                    update(d.id)
                  }}>
                  {" "}
                  <HiPencil />
                </button>
                <button
                  className="text-black text-xl hover:scale-105 duration-100 "
                  onClick={() => del(d.id)}>
                  {" "}
                  <AiFillDelete />
                </button>
              </div>
              <p className="text-xl font-semibold break-all">{d.val}</p>
              <p className="text-md text-gray-600 break-all">
                {d.des.length > 150 ? (
                  <div>{(newdes = d.des.slice(0, 202))}.....</div>
                ) : (
                  d.des
                )}
              </p>
            </div>
          );
        })
      ) : (
        
          data.length<=0?<h1 className="text-center text-lg  col-span-4 w-full mx-auto align-center font-semibold my-6 ">
          Create a new Note!
        </h1>:<Loader/>)}
    </div>
  );
};

export default Notes;
