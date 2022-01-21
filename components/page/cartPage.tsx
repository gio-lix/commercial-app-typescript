import {FC} from "react"
import {useDispatch, useSelector} from "react-redux";
import {NIProductsTypes} from "../../redux/types";
import {useRouter} from "next/router";
import {
    fetchCartDelete,
    fetchCartQuantity,
    fetchCartQuantityDecrease,
} from "../../redux/reducers/cart/cart-action-type";


const CartPage: FC<NIProductsTypes> = ({title,id, image, rating, qty, price }) => {
    const {pathname} = useRouter()
    const {cart} = useSelector((state: any) => state.cartReducer)
    const dispatch = useDispatch()
    const orderPath = pathname === '/order'

    const newCart = cart.filter((el:any) => el.id === id)

    const handleIncrease = () => dispatch(fetchCartQuantity(id))
    const handleClickDelete = () => {
        dispatch(fetchCartDelete(id))
    }
    const handleDecrease = () => {
        if (newCart[0].qty < 2 ) {
            return
        }
        dispatch(fetchCartQuantityDecrease(id))
    }
    console.log(rating)
    console.log(rating.rate)
    return (
        <>
            <div className={`${orderPath && ' '}`}>
                <div className={`${orderPath ? '  flex flex-col justify-center ' : '  flex flex-col'} relative flex flex-col justify-evenly h-36 border-t border-gray-400 group `}>
                    <div onClick={handleClickDelete}  className=' absolute z-30 hidden group-hover:inline-flex bg-opacity-40 h-10 w-10  right-0 top-0 bg-black flex items-center  justify-center cursor-pointer '>
                        <p className='text-3xl font-bold text-white -translate-y-1'>&times;</p>
                    </div>
                    <div className={`flex justify-between items-center `}>
                        <div className={`${orderPath ? 'flex flex-row w-full' : 'flex flex-col'}`}>
                            <div className={`${orderPath ? 'w-full grid grid-cols-6 items-center  ' : 'flex flex-col'}`}>
                                <p className={`${orderPath ? 'col-span-2 text-lg mr-10' : 'text-sm'} font-bold text-gray-600`}>Title</p>
                                <p className={`${orderPath ? 'col-span-4 text-sm w-96 ' : 'text-xs w-36'} `}>{title}</p>
                            </div>
                        </div>
                        <img src={image} className={`${orderPath ? 'h-20 w-20 absolute mt-[70px] right-0 ' : 'h-14 w-14 '}`} alt="img"/>
                    </div>
                    <div className={`${orderPath ? ' w-full grid grid-cols-6' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'col-span-2 text-lg ' : ' text-xs '} font-bold text-gray-600`}>Quantity</p>
                        <div className={`${orderPath && 'flex space-x-4 my-2'}`}>
                            {orderPath && <button  onClick={handleDecrease} className='w-7 h-7 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600'><span>-</span></button>}
                            <p className={`${orderPath ? 'col-span-4 text-lg ' : 'text-xs'}`}>{qty}</p>
                            {orderPath && <button  onClick={handleIncrease} className='w-7 h-7 bg-gray-400 text-white flex items-center justify-center hover:bg-gray-600'><span>+</span></button>}
                        </div>
                    </div>
                    <div className={`${orderPath ? ' w-full grid grid-cols-6' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'col-span-2 text-lg' : ' text-xs '} font-bold text-gray-600`}>rating</p>
                        <p className={`${orderPath ? 'col-span-4 text-lg' : 'text-xs'}`}>{rating.rate}</p>
                    </div>
                    <div className={`${orderPath ? ' w-full grid grid-cols-6' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'col-span-2 text-lg' : ' text-xs '} font-bold text-gray-600`}>Price</p>
                        <p className={`${orderPath ? 'col-span-4 text-lg' : 'text-xs'}`}><span className={`${orderPath ? 'text-lg ' : 'text-xs'} font-bold `}>$</span> {price}</p>
                    </div>

                </div>
                {/*<div className='bg-red-400'>   </div>*/}
            </div>
        </>
    )
};
export default CartPage