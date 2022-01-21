import {FC, useEffect, useRef, useState} from "react"
import {ShoppingCartIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import {IProductsTypes} from "../../redux/types";
import {useDispatch, useSelector} from "react-redux";
import {productReducer} from "../../redux/reducers/products/product-reducer";
import {fetchCartRequest} from "../../redux/reducers/cart/cart-action-type";
import {useMouse} from "../../helper";

interface IProductsPage {
    str: IProductsTypes
}

const ProductsPage: FC<IProductsPage> = ({str}) => {
    const router = useRouter()
    const orderRef = useRef<HTMLButtonElement | null>(null);
    const dispatch = useDispatch()
    const {products} = useSelector((state: any) => state.productReducer)
    const [hoverText, setHoverText] = useState<string>('');

    const handleClick = (id: number) => {
        router.push(`/category/${id}`)
    }
    const takeProduct = (item: {}[]) => {
        return item.filter((e: any) => e.id === str.id)[0]
    }

    const handleAddClick = () => {
        dispatch(fetchCartRequest({product: takeProduct(products)}))
    }

    useEffect(() => {
        window.addEventListener('mouseover', handleMouseOver)
        return () => window.removeEventListener('mouseover', handleMouseOver)
    }, []);
    const handleMouseOver = (e: any) => {
        if (e.path.includes(orderRef.current)) {
            setHoverText('add to cart')
        } else {
            setHoverText('')
        }
    }
    const {x, y} = useMouse()
    return (
        <>
            <div key={str.id} className='flex justify-center items-center h-96 group'>
                <div
                    className='relative w-full h-full flex flex-col w-80 sm:w-64 border border-gray-200 px-1  hover:shadow-2xl'>
                    <img  src={str.image} alt="img" className='h-60 w-full'/>
                    <p className='text-sm font-semibold'>{str.title}</p>
                    <p>$ {str.price}</p>
                    <button ref={orderRef} onClick={handleAddClick}
                        className='hidden group-hover:inline-flex justify-center  items-center text-white absolute z-20 bottom-6 right-4  rounded-full w-8 h-8 bg-green-500'>
                        <ShoppingCartIcon className='w-6 h-6 white-center'/>
                    </button>
                    <div  className='absolute bottom-6 w-full flex justify-center'>
                        <button  onClick={() => handleClick(str.id)}
                            className='w-20 text-gray-600 py-1 border border-gray-400 m-auto text-sm hover:bg-gray-500 hover:text-white font-semibold'>
                            Add Cart
                        </button>
                    </div>
                    <div
                        className={`hidden md:inline-flex  ${hoverText ? ' w-28 h-10 bg-white shadow-xl flex items-center justify-center' : 'hidden'}  absolute z-50  ${x > 580 ? 'right-7' : '-right-20'}  -bottom-5 `}>
                        <p className=' text-gray-400 font-raleway font-semibold '>{hoverText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPage
