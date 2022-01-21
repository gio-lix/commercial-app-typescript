import {FC} from "react"
import Layout from "../components/Layout";
import {BanIcon} from "@heroicons/react/solid";

interface IError {

}
const Error: FC<IError> = () => {
  return (
     <Layout>
         <div className='w-full h-96 flex flex-col items-center mt-52 '>
             <BanIcon  className='w-20 text-3xl text-red-400'/>
             <p className='text-3xl font-bold text-gray-400 uppercase'>Page notfound</p>
         </div>
     </Layout>
  )
}
export default Error