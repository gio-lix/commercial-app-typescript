import {FC} from "react"
import {useSelector} from "react-redux";
import {IProductsTypes, NIProductsTypes} from "../../redux/types";
import {useRouter} from "next/router";


const CartPage: FC<NIProductsTypes> = ({title, image, qty, price }) => {
    const {pathname} = useRouter()
    const orderPath = pathname === '/order'

    const handleClickDelete = () => {

    }

    return (
        <>
            <div className={`${orderPath && 'px-36 '}`}>
                <div className={`${orderPath ? '  flex flex-col justify-center ' : '  flex flex-col'} relative flex flex-col justify-evenly h-36 border-t border-gray-400 group `}>
                    <div className=' absolute z-30 hidden group-hover:inline-flex bg-opacity-40 h-full w-28  right-0 top-0 bg-black flex items-center justify-center '>
                        <button onClick={handleClickDelete} className='text-3xl font-bold text-white'>&times;</button>
                    </div>
                    <div className={`flex justify-between items-center `}>
                        <div className={`${orderPath ? 'flex flex-row w-full' : 'flex flex-col'}`}>

                            <div className={`${orderPath ? 'w-full grid grid-cols-6 items-center  ' : 'flex flex-col'}`}>
                                <p className={`${orderPath ? 'col-span-2 text-lg mr-10' : 'text-sm'} font-bold text-gray-600`}>Title</p>
                                <p className={`${orderPath ? 'col-span-4 text-sm w-96 ' : 'text-xs w-36'} `}>{title}</p>
                            </div>
                        </div>
                        <img src={image} className={`${orderPath ? 'h-20 w-20 absolute mt-[70px] right-0 ' : 'h-9 w-9 '}`} alt="img"/>
                    </div>
                    <div className={`${orderPath ? ' w-full grid grid-cols-6' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'col-span-2 text-lg ' : ' text-xs '} font-bold text-gray-600`}>Quantity</p>
                        <div className={`${orderPath && 'flex space-x-4 my-2'}`}>
                            {orderPath && <button className='w-7 h-7 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600'><span>-</span></button>}
                            <p className={`${orderPath ? 'col-span-4 text-lg ' : 'text-xs'}`}>{qty}</p>
                            {orderPath && <button className='w-7 h-7 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600'><span>+</span></button>}
                        </div>
                    </div>
                    <div className={`${orderPath ? ' w-full grid grid-cols-6' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'col-span-2 text-lg' : ' text-xs '} font-bold text-gray-600`}>Price</p>
                        <p className={`${orderPath ? 'col-span-4 text-lg' : 'text-xs'}`}><span className={`${orderPath ? 'text-lg ' : 'text-xs'} font-bold `}>$</span> {price}</p>
                    </div>

                </div>
            </div>
        </>
    )
};
export default CartPage