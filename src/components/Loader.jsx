
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full mx-auto flex justify-center my-10'>
        <RotatingLines
        strokeColor="#86cfac"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
        className="text-center w-full mx-auto"
      />
    </div>
  )
}

export default Loader