import {NextPage} from "next";
import Layout from "../components/Layout";
import CartPage from "../components/page/cartPage";
import {useSelector} from "react-redux";
import {NIProductsTypes} from "../redux/types";

const Order: NextPage = () => {
    const {cart} = useSelector((state: any) => state.cartReducer)
    const totalPrice = (item: any) => {
        return item.reduce((acc: any, a:NIProductsTypes) => {
            return  acc += a.price
        },0)
    }
    return (
     <Layout>
         {cart.length > 0 ? (
             <div className='px-10 mt-10 grid grid-cols-7'>
                 <div className='w-full col-span-5 border-t border-gray-100 '>
                     {cart.map((el: any) => (
                         <CartPage {...el} key={el.id} />
                     ))}
                 </div>
                 <div className=' col-span-2 px-3'>
                     <div className='sticky top-14 w-full h-36 bg-indigo-50 border border-gray-400'>
                         <div className='flex justify-between'>
                             <p>Total Price</p>
                             <p><span className='font-bold px-1'>$</span>{totalPrice(cart).toFixed(2)}</p>
                         </div>
                     </div>
                 </div>
             </div>
         ) : (
             <div className='flex justify-center'>
                 <p className='text-3xl font-bold text-gray-300 mt-20'>Cart Is Empty</p>
             </div>
         )}

     </Layout>
  )
}
export default Order