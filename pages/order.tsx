import {NextPage} from "next";
import Layout from "../components/Layout";
import CartPage from "../components/page/cartPage";
import {useSelector} from "react-redux";

const Order: NextPage = () => {
    const {cart} = useSelector((state: any) => state.cartReducer)

    return (
     <Layout>
         <div className='px-10 mt-10'>
             <div className='w-full border-t border-gray-100 '>
                 {cart.map((el: any) => (
                     <CartPage {...el} key={el.id} />
                 ))}
             </div>
         </div>

     </Layout>
  )
}
export default Order