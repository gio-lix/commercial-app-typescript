import {FC} from "react"
import {NextPage} from "next";
import Layout from "../components/Layout";

const Contact: NextPage = () => {
  return (
     <Layout hideSideMenu>
         <div className='w-full h-screen flex items-center justify-center '>
             <p className='text-3xl font-bold text-gray-400 uppercase'>Contact page</p>
         </div>
     </Layout>
  )
}
export default Contact