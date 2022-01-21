import {NextPage} from "next";
import Layout from "../components/Layout";
import CartPage from "../components/page/cartPage";
import {useSelector} from "react-redux";

const Order: NextPage = () => {
    const {cart} = useSelector((state: any) => state.cartReducer)
    const newTotalPrice = (item: any) => {
        return item.map((e: any) => e.price * e.qty).reduce((a: any, b: any) => a + b, 0).toFixed(2)
    }
    return (
     <Layout>
         {cart.length > 0 ? (
             <div className='px-10 mt-20 grid grid-cols-7 '>
                 <div className='w-full  col-span-7 mt-28 md:mt-0 md:col-span-5 border-t border-gray-100 '>
                     {cart.map((el: any) => (
                         <CartPage {...el} key={el.id} />
                     ))}
                 </div>
                 <div
                     className=' col-span-7 fixed top-14 md:top-0  md:relative z-40 w-full left-0 bg-white md:col-span-2 px-4 border-b border-gray-400 md:border-white'>
                     <div className='sticky top-14 w-full h-auto md:h-36 md:border md:border-gray-300 p-2'>
                         <div className='flex justify-between'>
                             <p className='font-semibold uppercase'>Items</p>
                             <p><span className='font-bold px-1'> </span>{cart.length} </p>
                         </div>
                         <div className='flex justify-between mt-4'>
                             <p className='font-semibold uppercase'>Total Price</p>
                             <p><span className='font-bold px-1'>$</span>{newTotalPrice(cart)}</p>
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