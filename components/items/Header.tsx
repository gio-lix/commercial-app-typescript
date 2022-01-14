import {FC} from "react"
import Link from 'next/link'
import {useRouter} from "next/router";

interface IHeader {

}

const Header: FC<IHeader> = () => {
    const {pathname} = useRouter()

    return (
        <>
            <div className='h-14 w-full bg-indigo-50 flex items-center justify-between px-2 ms:px-6 lg:px-14 '>
                <div>
                    <p className='text-2xl font-semibold'>ECCOm</p>
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
                        <button className='w-20 h-7 border border-black hover:text-white hover:bg-green-500 font-semibold'>Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header