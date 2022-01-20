import {FC} from "react"

interface IFooter {

}
const Footer: FC<IFooter> = () => {
  return (
     <>
        <footer>
            <div className='w-full h-52 grid md:grid-cols-3'>
                <div className='border border-gray-300 flex justify-center items-center py-3 md:py-0'>
                    <p className='text-3xl text-gray-400 font-bold'>ECCOm</p>
                </div>
                <div className='border border-gray-300 text-gray-500 flex md:flex-col justify-evenly py-3 md:py-0 px-5'>
                    <p className='font-semibold text-gray-600'>Shopping online</p>
                    <p> Order Status </p>
                    <p> Shipping and Delivery </p>
                    <p> Returns </p>
                    <p> Payment options </p>
                </div>
                <div className='border border-gray-300 py-3 md:py-0 '>
                    <p className='font-semibold text-gray-600 mt-4 text-center'>Contact</p>
                    <div className='flex justify-center space-x-3 mt-3'>
                        <div className='w-7 h-7 text-green-400 bg-gray-200 flex justify-center items-center'> &times; </div>
                        <div className='w-7 h-7 text-green-400 bg-gray-200 flex justify-center items-center'> &times; </div>
                        <div className='w-7 h-7 text-green-400 bg-gray-200 flex justify-center items-center'> &times; </div>
                        <div className='w-7 h-7 text-green-400 bg-gray-200 flex justify-center items-center'> &times; </div>
                        <div className='w-7 h-7 text-green-400 bg-gray-200 flex justify-center items-center'> &times; </div>
                    </div>
                </div>
            </div>
            <div className='h-10 w-full  flex justify-center items-center'>
                <p>copyRight @</p>
            </div>
        </footer>
     </>
  )
}
export default Footer