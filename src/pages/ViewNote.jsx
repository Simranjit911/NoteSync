import  { useContext } from 'react'
import UserContext from '../components/UserContext'
import { RxCross1 } from 'react-icons/rx'

const ViewNote = () => {
    const{setview,des,val}=useContext(UserContext)
  return (
    <div>
      <div className="mx-auto flex justify-center ">
      <div className="absolute w-full mx-2 top-10 shadow-2xl px-2 py-2 left-auto h-fit pb-5 border md:w-[60%] mx-auto  z-10 bg-green-100">
        <div className="flex flex-col  justify-center mx-auto sm:px-10">
            <button onClick={()=>setview(false)} className='self-end'><RxCross1 /></button>
          
          <div className="w-full self-center flex flex-col gap-3 flex-1">
            <h1 className="text-center text-2xl font-bold ">Note Details</h1>
            <div className="text-center justify-center w-full px-5 flex gap-4 md:w-[100%] mx-auto flex-col" >
            <div className='text-left'>
                <p className='text-lg font-bold'>Title:</p>
                <p>{val}</p>
            </div>
            <div className='text-left'>
                <p className='text-lg font-bold'>Description:</p>
                <p>{des}</p>
            </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default ViewNote