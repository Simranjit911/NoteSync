import { useContext, useEffect} from "react";

import { db } from "../firebase";
import {
  
  collection, 
  // getDocs,
  onSnapshot,
} from "firebase/firestore";
import Navbar from "../components/Navbar";
import UserContext from "../components/UserContext";
import Hero from "../components/Hero";
import AddNote from "../components/AddNote";
import Notes from "../components/Notes";
import Loader from "../components/Loader";
import ViewNote from "./ViewNote";
const Home = () => {

 const {loader,setloader,setdata,setval,setdes,addnote,updatedata,view}=useContext(UserContext)

 
  let user = JSON.parse(localStorage.getItem("user"));
  const collectionRef = collection(db, `users/${user.uid}/notes`);

  async function getData() {
    try {
      // const fetch = await getDocs(collectionRef);
      // setdata(
      //   fetch.docs.map((doc) => ({
      //     ...doc.data(),
      //     id: doc.id,
      //   }))
      // );
      onSnapshot(collectionRef, (snapshot) => {
        setdata(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
      setTimeout(() => {
        setloader(false)
        
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData();
    setval(updatedata.val);
    setdes(updatedata.des);
    console.log("use effect running");
  }, [updatedata]);
  return (
    <>
      {" "}
      <Navbar />
      <Hero/>
      {
        addnote && <AddNote/>
      }
      {
        view && <ViewNote/>
      }
      {loader?<Loader/>: 
      <Notes/>}
    
    </>
  );
};

export default Home;
