import {FC} from "react"
import {ShoppingCartIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";

interface IProductsPage {
    str: {
        id: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: any
    }
}

const ProductsPage: FC<IProductsPage> = ({str}) => {
    const router = useRouter()
    const handleClick = (id: number) => {
        router.push(`/category/${id}`)
    }
    return (
        <>
            <div key={str.id} className='flex justify-center items-center h-96 group'>
                <div
                    className='relative w-full h-full flex flex-col w-64 border border-gray-200 px-1  hover:shadow-2xl'>
                    <img  src={str.image} alt="img" className='h-60 w-full'/>
                    <p className='text-sm font-semibold'>{str.title}</p>
                    <p>$ {str.price}</p>
                    <button
                        className='hidden group-hover:inline-flex justify-center  items-center text-white absolute bottom-6 right-4  rounded-full w-8 h-8 bg-green-500'>
                        <ShoppingCartIcon className='w-6 h-6 white-center'/>
                    </button>
                    <div className='absolute bottom-6 w-full flex justify-center'>
                        <button onClick={() => handleClick(str.id)}
                            className='w-20 text-gray-600 py-1 border border-gray-400 m-auto text-sm hover:bg-gray-500 hover:text-white font-semibold'>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPage
