import {FC, SyntheticEvent, useEffect, useState} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import CartPage from "../page/cartPage";
import {NIProductsTypes} from "../../redux/types";

interface IHeader {

}

const Header: FC<IHeader> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {cart} = useSelector((state: any) => state.cartReducer)
    const {pathname} = useRouter()
    const router = useRouter()
    const orderPath = pathname === '/order'

    const cartItems = (item: string) => {
        return  item.length > 0 && item.length
    }

    const totalPrice = (item: any) => {
        return item.reduce((acc: any, a:NIProductsTypes) => {
            return acc += a.price
        },0)
    }
    const handleOpen = () => setOpen(!open)

    return (
        <>
            <div className={`${pathname === '/products' && 'fixed top-0 z-20'}  h-14 w-full bg-indigo-50 flex items-center justify-between px-2 ms:px-6 lg:px-14 `}>
                <div>
                    <p onClick={() => router.push('/')} className='text-2xl cursor-pointer font-semibold'>ECCOm</p>
                </div>
                <div>
                    <nav className='w-full h-full'>
                        <ul className='h-full flex items-center text-gray-500  space-x-5'>
                            <li>
                                <Link href='/'>
                                    <a className={`${pathname === '/' && 'text-black underline underline-offset-8'}`}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/products'>
                                    <a className={`${pathname === '/products' && 'text-black underline underline-offset-8'}`}>Products</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a className={`${pathname === '/about' && 'text-black underline underline-offset-8'}`}>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact'>
                                    <a className={`${pathname === '/contact' && 'text-black underline underline-offset-8'}`}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex space-x-3'>
                    <div>
                        <button className='w-20 h-7 border border-black hover:text-white hover:bg-green-500 font-semibold'>Login</button>
                    </div>
                    <div>
                        <button disabled={orderPath} onClick={handleOpen}
                                className={`${orderPath ? ' bg-gray-300 text-white' : ' hover:text-white hover:bg-green-500 '} border border-black font-semibold w-20 h-7 `}>
                            Cart
                            <span className='ml-1'>{cartItems(cart)}</span>
                        </button>
                    </div>
                </div>
                {open && (
                    <>
                        <div onClick={() => setOpen(false)} className='fixed top-0 left-0 bottom-0 z-20 w-full  '>   </div>
                        <div className={`absolute top-14 right-6 z-30 w-60 h-auto bg-white shadow-2xl p-1`}>
                            <div className='flex justify-between'>
                                <p>Items</p>
                                <span>{cartItems(cart)}</span>
                            </div>
                            {cart.map((el: any) => (
                                <CartPage {...el} key={el.id} />
                            ))}
                            <div className='h-7 flex justify-between items-center border-t border-gray-300'>
                                <p className='font-bold text-sm '>Total</p>
                                <p>  <span className='text-gray-800 font-bold px-1'>$</span>{totalPrice(cart)}</p>
                            </div>
                            <div className='h-7 flex justify-between items-center '>
                               <button onClick={() => router.push('/order')} className='w-20 py-0.5 bg-gray-400 text-white hover:bg-gray-900 '>Orders</button>
                               <button className='w-20 py-0.5 bg-gray-400 text-white hover:bg-gray-900 '>Check out</button>
                            </div>
                        </div>

                    </>


                )}
            </div>
        </>
    )
}
export default Header