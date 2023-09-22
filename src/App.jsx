import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserContext from "./components/UserContext";
import { useState } from "react";

// const App = () => {
//   const [data, setdata] = useState({
//     name: "",
//     age: "",
//   });
//   const putdata = () => {
//     set(ref(db, "user" + data.name), {
//       name: data.name,
//       age: data.age,
//     });
//   };

//   return (
//     <div>
//       Firebase App
//       <input
//         type="text"
//         placeholder="name"
//         value={data.name}
//         onChange={(e) => setdata({ ...data, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="age"
//         onChange={(e) => setdata({ ...data, age: e.target.value })}
//       />
//       <button onClick={putdata}>Add Data</button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [data, setdata] = useState([]);
  const [val, setval] = useState("");
  let [des, setdes] = useState("");
  const [updatedata, setupdatedata] = useState({});
  const [id, setid] = useState("");
  const [addnote,setaddnote]=useState(false)
  const [loader,setloader]=useState(true)
  const [view,setview]=useState(false)
  const [searchVal,setsearchVal]=useState("")

  
  return (
    <UserContext.Provider value={{searchVal,setsearchVal,data ,loader,setloader,setdata,val,setval,des,setdes,updatedata,setupdatedata,id,setid,addnote,setaddnote,view,setview}}>
     
    <Toaster/>
   <Outlet/>
    </UserContext.Provider>
  );
};

export default App;
