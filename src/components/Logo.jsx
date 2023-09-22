
import img from "../assets/favicon-32x32.png"
const Logo = () => {
  return (
    <div className='flex items-center '>
    <img src={img} alt="" className='sm:w-8 object-fit w-6'/>
    <h1 className='sm:text-2xl text-lg'><span className='font-bold'> Note</span>Sync</h1>
    </div>
  )
}

export default Logo