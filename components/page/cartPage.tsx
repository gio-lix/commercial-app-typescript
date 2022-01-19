import {FC} from "react"
import {useSelector} from "react-redux";
import {IProductsTypes, NIProductsTypes} from "../../redux/types";
import {useRouter} from "next/router";


const CartPage: FC<NIProductsTypes> = ({title, image, qty, price }) => {
    const {pathname} = useRouter()
    const orderPath = pathname === '/order'
    return (
        <>
            <div className='w-full '>
                <div className={`${orderPath ? 'relative ' : 'py-1 border-t border-gray-400 flex flex-col'} `}>
                    <div className={`flex justify-between items-center`}>
                        <div className={`${orderPath ? 'flex flex-row' : 'flex flex-col'}`}>
                            <div className={`${orderPath ? 'flex flex-row items-center' : 'flex flex-col'}`}>
                                <p className={`${orderPath ? 'text-lg mr-10' : 'text-sm'} font-bold text-gray-600`}>Title</p>
                                <p className={`${orderPath ? 'text-ms w-auto ' : 'text-xs w-36'} `}>{title}</p>
                            </div>
                        </div>
                        <img src={image} className={`${orderPath ? 'h-20 w-20 absolute mt-14 right-0 ' : 'h-9 w-9 '}`} alt="img"/>
                    </div>
                    <div className={`${orderPath ? ' flex flex-start' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'text-lg' : ' text-xs '} font-bold text-gray-600`}>Quantity</p>
                        <p className={`${orderPath ? 'text-lg ml-20' : 'text-xs'}`}>{qty}</p>
                    </div>
                    <div className={`${orderPath ? 'flex flex-start' : 'flex justify-between items-center my-0.5'}`}>
                        <p className={`${orderPath ? 'text-lg' : ' text-xs '} font-bold text-gray-600`}>Price</p>
                        <p className={`${orderPath ? 'text-lg' : 'text-xs'}`}><span className={`${orderPath ? 'text-lg ml-10' : 'text-xs'} font-bold `}>$</span> {price}</p>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CartPage