import {GetServerSideProps, NextPage} from "next";
import Layout from "../../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {wrapper} from "../../redux/store";
import { requestProductsById} from "../../redux/reducers/products/action-type";
import {END} from "redux-saga";
import {fetchCartRequest} from "../../redux/reducers/cart/cart-action-type";


const Item: NextPage = () => {
    const {productsId, errors} = useSelector((data: any) => data.productReducerId)
    console.log()
    const dispatch = useDispatch()

    const addProductsItem = (product: any) => {
        dispatch(fetchCartRequest({product: product}))
    }

    return (
        <Layout hideSideMenu>
            {errors.length > 0 && (
                <div className='flex justify-center mt-36 '>
                    <p className='text-2xl text-gray-400'>{errors}</p>
                </div>
            )}
            {Object.values(productsId).length > 0 && (
                <div className='grid grid-cols-2  my-28 px-2'>
                    <div className=' flex justify-center  col-span-2 md:col-span-1'>
                        <img src={productsId?.image} className='h-72 w-72' alt="img"/>
                    </div>
                    <div className=' col-span-2 md:col-span-1'>
                        <p className='text-3xl font-semibold text-gray-400'>{productsId?.category}</p>
                        <p className='text-xl text-gray-600'>{productsId?.title}</p>
                        <p className='text-gray-600 font-bold'>rating {productsId?.rating?.rate}</p>
                        <p className='text-gray-600 font-bold my-5'><span className='text-xl'>$</span> {productsId?.price}
                        </p>
                        <p className='text-gray-400   text-cm'> {productsId?.description} </p>
                        <div className='flex justify-center my-3 space-x-3'>
                            <button
                                onClick={() => addProductsItem(productsId)}
                                className='px-2 py-0.5 font-semibold border border-gray-500 hover:bg-gray-600 hover:text-white text-gray-500'>Add to cart
                            </button>
                            <button className='px-2 py-0.5 text-white bg-gray-500  hover:bg-gray-600 font-semibold'>Go to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default Item

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({params}: any) => {
//     store.dispatch(requestProductsById(params.id))
//     store.dispatch(END)
//     await store.sagaTask.toPromise()
//     return {
//         props: {data: null},
//     }
// })

export const getStaticProps = wrapper.getStaticProps(store => async ({params}: any) => {
    store.dispatch(requestProductsById(params.id))
    store.dispatch(END)
    await store.sagaTask.toPromise()
    return {props: {}, revalidate: 1}
})
export const getStaticPaths = async () => {
    const data = await fetchProducts.getProducts()
    const paths = data.map((el: any) => ({params: {id: el.id.toString()}}))
    return {
        paths,
        fallback: true
    }
}

