import {FC, SyntheticEvent, useEffect, useRef, useState} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import CartPage from "../page/cartPage";
import LoginForm from "./LoginForm";
import {SearchIcon} from "@heroicons/react/solid";
import {MenuIcon} from "@heroicons/react/outline";
import {CogIcon} from "@heroicons/react/solid";

interface IHeader {

}

const Header: FC<IHeader> = () => {
    const searchRef = useRef<HTMLInputElement | any>(null);
    const focRef = useRef<HTMLInputElement | any>(null);
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openRightMenu, setOpenRightMenu] = useState<boolean>(false);
    const [loginOpen, setLoginOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleTerm = (e: any) => setSearchTerm(e.target.value)


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
    const handleWindowClick = (e: SyntheticEvent | any) => {
        if (!e.path.includes(focRef.current)) setSearch(false)
    }
    const handleOpenMenu = () =>setOpenMenu(!openMenu)
    const handleRightMenuOpen = () => setOpenRightMenu(!openRightMenu)

    const openFromRightMenuLogin = () => {
        setOpenRightMenu(false)
        setLoginOpen(true)
    }
    const openFromRightMenuCart = () => {
        setOpenRightMenu(false)
        setOpen(true)
    }



    const handleSubmitSearch = async (e: any) => {
        e.preventDefault()
        setSearchTerm('')
        setSearch(false)
        router.push(`/search/${searchTerm.toLowerCase()}`)
    }

    return (
        <>
            <div className={`${headerPath ? ' bg-black  bg-opacity-40 z-50  ' : 'bg-white' } fixed  z-50 top-0 h-14 w-full flex items-center justify-between px-2 ms:px-6 lg:px-14 `}>
                <button onClick={handleOpenMenu} className='w-10 h-10   md:hidden text-3xl flex item-center justify-center'>
                    <MenuIcon className={`${headerPath ? 'text-white' : 'text-black'} w-8`} />
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

                {/* search functions  */}
                <div ref={focRef} className={`${headerPath && 'text-white '} hidden lg:inline-flex  flex space-x-3`}>
                    <div className='fixed right-0 flex w-72 h-7 top-[18px]  bg-opacity-20 pl-4'>
                        <form onSubmit={handleSubmitSearch}>
                            <div className={`absolute right-60  z-20 flex w-52  overflow-x-hidden`}>
                                <input
                                    onChange={handleTerm}
                                    value={searchTerm}
                                    ref={searchRef}
                                    type="text"
                                    placeholder='Search'
                                    className={`${search ? 'translate-x-0 transition duration-150' : 'translate-x-52'} ${!headerPath && 'bg-indigo-50'} w-full text-black pl-2 outline-none`}
                                />
                            </div>
                        </form>
                        <button onClick={handleClickSearch}  className=' h-7 absolute z-30   font-semibold'>
                            <SearchIcon className='w-6' />
                        </button>
                    </div>
                    <div>
                        <button onClick={handleLoginOpen} className='w-20 h-7 absolute z-30 right-36  top-[18px] border border-green-400 hover:text-black hover:bg-green-100 font-semibold'>Login</button>
                    </div>
                    <div>
                        <button
                            disabled={orderPath} onClick={handleOpen}
                            className={`${orderPath ? ' bg-gray-300 text-white' : '  hover:bg-green-100 '} absolute right-14 top-[18px] z-30 border border-green-400 font-semibold w-20 h-7 `}>
                                Cart
                                <span className='ml-1'>{cartItems(cart)}</span>
                        </button>
                    </div>
                </div>
                <button onClick={handleRightMenuOpen} className='lg:hidden block  '>
                    <CogIcon className={`${headerPath ? 'text-white' : 'text-black'} w-6`}/>
                </button>

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
                        <div className={`${cart.length !== 0 && ' bg-white'} absolute   top-14 left-0 md:left-auto md:right-6 z-30 w-full md:w-72   w-full shadow-2xl p-1`}>
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
                                <div className={`${headerPath ? 'bg-black bg-opacity-50' : 'bg-white'} h-20  flex items-center justify-center`}>
                                    <p className='text-xl text-gray-300'>Cart Is Empty</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {openMenu && (
                    <div className='fixed w-full h-screen z-30 left-0 top-14'>
                        <div onClick={() => setOpenMenu(false)} className='w-full h-screen '> </div>
                        <div className={`${headerPath ? 'bg-black bg-opacity-40' : 'bg-white'} w-full sm:w-72 h-full  absolute top-0`}>
                            <nav className='w-full mt-4'>
                                <ul className='flex flex-col space-y-6 w-full '>
                                    <li
                                        className={`${headerPath ? 'text-white  hover:bg-black hover:bg-opacity-70' : 'text-gray-600  hover:bg-gray-50'} w-52 h-10 font-bold text-xl m-auto   flex items-center justify-center`}>
                                        <Link href='/' >
                                            <a className=' '>Home</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={`${headerPath ? 'text-white  hover:bg-black hover:bg-opacity-70' : 'text-gray-600  hover:bg-gray-50'} w-52 h-10 font-bold text-xl m-auto   flex items-center justify-center`}>
                                    <Link href='/products' >
                                            <a>Products</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={`${headerPath ? 'text-white  hover:bg-black hover:bg-opacity-70' : 'text-gray-600  hover:bg-gray-50'} w-52 h-10 font-bold text-xl m-auto   flex items-center justify-center`}>
                                    <Link href='/about' >
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={`${headerPath ? 'text-white  hover:bg-black hover:bg-opacity-70' : 'text-gray-600  hover:bg-gray-50'} w-52 h-10 font-bold text-xl m-auto   flex items-center justify-center`}>
                                    <Link href='/contact' >
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
                {openRightMenu && (
                    <div className={`fixed z-20 bg-black bg-opacity-30 w-full h-screen top-14 left-0`}>
                        <div onClick={() => setOpenRightMenu(false)} className='w-full h-screen bg-black bg-opacity-30'> </div>
                        <div className={`${headerPath ? 'bg-black bg-opacity-50' : 'bg-white'} fixed z-20  w-full h-auto top-14 left-0`}>
                            <div className=' flex justify-center space-x-10 '>
                                <form onSubmit={handleSubmitSearch}>
                                    <input
                                        onChange={handleTerm}
                                        value={searchTerm}
                                        type="text"
                                        placeholder='Search you favorite items'
                                        className={`${headerPath ? 'bg-black bg-opacity-50 text-white ' : 'bg-white text-black'} w-4/6  h-10 outline-none`}
                                    />
                                </form>
                            </div>
                            <div onClick={() => openFromRightMenuLogin()} className=' h-10 flex justify-center items-center border-t border-gray-400 cursor-pointer hover:text-white'>
                                <p className={`text-gray-500 uppercase font-bold`}>Login</p>
                            </div>
                            <div onClick={() => openFromRightMenuCart()} className=' h-10 flex justify-center items-center border-t border-gray-400 cursor-pointer '>
                                <p className='text-gray-500 uppercase font-bold'>Cart {cart?.length}</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Header