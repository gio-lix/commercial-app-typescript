import {FC, SyntheticEvent, useEffect, useRef, useState} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import CartPage from "../page/cartPage";
import LoginForm from "./LoginForm";
import {SearchIcon} from "@heroicons/react/solid";
interface IHeader {

}

const Header: FC<IHeader> = () => {
    const searchRef = useRef<HTMLInputElement | any>(null);
    const focRef = useRef<HTMLInputElement | any>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [loginOpen, setLoginOpen] = useState<boolean>(false);
    const {cart} = useSelector((state: any) => state.cartReducer)
    const {pathname} = useRouter()
    const router = useRouter()
    const orderPath = pathname === '/order'
    const headerPath = pathname === '/'


    const cartItems = (item: string) => {
        return  item.length > 0 && item.length
    }

    const newTotalPrice = (item: any) => {
        return item.map((e: any) => e.price * e.qty).reduce((a: any, b: any) => a + b, 0).toFixed(2)
    }

    const handleOpen = () => {
        setOpen(!open)
        setSearch(false)
    }
    const handleLoginOpen = () => {
        setLoginOpen(!loginOpen)
        setSearch(false)
    }
    const handleClickSearch = () => setSearch(!search)

    useEffect(() => {
        setTimeout(() => {
            if (search) searchRef.current.focus()
        }, 500)
        window.addEventListener("click", handleWindowClick)
        return () => window.removeEventListener('click', handleWindowClick)
    }, [search])
    const handleWindowClick = (e: any) => {
        if (!e.path.includes(focRef.current)) setSearch(false)
    }


    return (
        <>
            <div className={`${headerPath && ' fixed  bg-opacity-0 z-40  ' }  h-14 w-full flex items-center justify-between px-2 ms:px-6 lg:px-14 `}>
                <button className='w-10 h-10   md:hidden text-3xl flex item-center justify-center'>
                    <p className='font-bold hover:text-green-500 '>&times;</p>
                </button>
                <div>
                    <p onClick={() => router.push('/')} className={`${headerPath && 'text-white'} text-2xl cursor-pointer font-semibold`}>ECCOm</p>
                </div>
                <div className='hidden md:inline-flex'>
                    <nav className='w-full h-full '>
                        <ul className={ `${pathname === '/' ? 'text-white' : 'text-gray-400'} h-full flex items-center   space-x-5`}>
                            <li>
                                <Link href='/'>
                                    <a className={`${pathname === '/' && 'text-green-400 underline underline-offset-8'} `}>Home</a>
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

                <div ref={focRef} className={`${headerPath && 'text-white '} flex space-x-3`}>
                    <div className='relative flex w-52  overflow-x-hidden  '>
                        <input
                            ref={searchRef}
                            type="text"
                            placeholder='Search'
                            className={`${search ? 'translate-x-0 transition duration-150' : 'translate-x-52'} ${!headerPath && 'bg-indigo-50'} w-full text-black pl-2 outline-none`}
                        />
                    </div>
                    <button onClick={handleClickSearch}  className=' h-7   font-semibold'>
                        <SearchIcon className='w-6' />
                    </button>
                    <div>
                        <button onClick={handleLoginOpen} className='w-20 h-7 border border-black hover:text-black hover:bg-green-100 font-semibold'>Login</button>
                    </div>
                    <div>
                        <button disabled={orderPath} onClick={handleOpen}
                                className={`${orderPath ? ' bg-gray-300 text-white' : '  hover:bg-green-100 '} border border-black font-semibold w-20 h-7 `}>
                            Cart
                            <span className='ml-1'>{cartItems(cart)}</span>
                        </button>
                    </div>
                </div>

                {loginOpen && (
                    <>
                        <div className={`fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center `}>
                            <div onClick={() => setLoginOpen(false)} className='fixed bg-black bg-opacity-40 top-0 left-0 bottom-0 z-30 w-full h-full'>   </div>
                            <div className='absolute z-40 w-11/12 md:w-3/6 h-auto bg-white pb-4 p-3'>
                                <div className='flex justify-between items-center text-gray-500'>
                                    <button onClick={() => setLoginOpen(false)} className='text-2xl '>&times;</button>
                                </div>
                                <div>
                                    <LoginForm />
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {open && (
                    <>
                        <div onClick={() => setOpen(false)} className='fixed top-0 left-0 bottom-0 z-20 w-full  '>   </div>
                        <div className={`absolute   top-14 right-6 z-30 w-72   bg-white shadow-2xl p-1`}>
                            {cart.length > 0 ? (
                                <>
                                    <div className='absolute top-0 left-0 px-2 w-full flex justify-between bg-indigo-50 '>
                                        <p className='font-bold'>Items</p>
                                        <span  className='font-bold'>{cartItems(cart)}</span>
                                    </div>
                                    <div className=' max-h-96 overflow-y-auto scrollbar-hide mt-6 '>
                                        {cart.map((el: any) => (
                                            <CartPage {...el} key={el.id} />
                                        ))}
                                    </div>
                                    <div className='h-7 flex justify-between items-center border-t border-gray-300'>
                                        <p className='font-bold text-sm '>Total</p>
                                        <p>  <span className='text-gray-800 font-bold px-1'>$</span>{newTotalPrice(cart)}</p>
                                    </div>
                                    <div className='h-7 flex justify-between items-center bg-white  '>
                                        <button onClick={() => router.push('/order')} className='w-20 py-0.5 bg-gray-400 text-white hover:bg-gray-900 '>Orders</button>
                                        <button className='w-20 py-0.5 bg-gray-400 text-white hover:bg-gray-900 '>Check out</button>
                                    </div>
                                </>
                            ) : (
                                <div className='h-20 bg-white flex items-center justify-center'>
                                    <p className='text-xl text-gray-300'>Cart Is Empty</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
export default Header