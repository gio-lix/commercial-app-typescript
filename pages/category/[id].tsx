import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import {useDispatch, useSelector} from "react-redux";


const Item: NextPage = () => {
    const dispatch = useDispatch()
    const {cart} = useSelector((data: any) => data.cartReducer)
    const {productsById} = useSelector((data: any) => data.fetchDataReducer)
    const {count} = useSelector((state: any) => state.countReducer)

    console.log('cart', count)


    const addProductsItem = (product: any) => {
        // dispatch(addCart({...product, quantity: 1}))
    }

    return (
        <Layout>
            <p className='text-2xl'>{count}</p>
            <button onClick={() => dispatch({type: 'ADD_NUMBER'})} className='w-36 h-10 bg-green-500 text-white'>Add</button>
            <div className='grid grid-cols-2 mt-14'>
                <div className='flex justify-center'>
                    <img src={productsById?.image} className='h-72 w-72' alt="img"/>
                </div>
                <div>
                    <p className='text-3xl font-semibold text-gray-400'>{productsById?.category}</p>
                    <p className='text-xl text-gray-600'>{productsById?.title}</p>
                    {/*<p className='text-gray-600 font-bold'>rating {productsById?.rating.rate}</p>*/}
                    <p className='text-gray-600 font-bold my-5'><span className='text-xl'>$</span> {productsById?.price}
                    </p>
                    <p className='text-gray-400 text-cm'> {productsById?.description} </p>
                    <div className='flex justify-center my-3 space-x-3'>
                        <button onClick={() => addProductsItem(productsById)} className='px-2 py-0.5 font-semibold border border-gray-500 text-gray-500'>Add to cart
                        </button>
                        <button className='px-2 py-0.5 text-white bg-gray-500 font-semibold'>Go to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Item

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async ({params}: any) => {
//     // console.log('req.cookies',parseCookies(req.cookies.demo) )
//     await store.dispatch(fetchingDataId(params.id))
//     return {props: {}}
// })

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async ({params}: any) => {
//     await store.dispatch(fetchingDataId(params.id))
//     return {props: {}, revalidate: 1}
// })
// export const getStaticPaths = async () => {
//     const data = await fetchProducts.getProducts()
//     const paths = data.map((el: any) => ({params: {id: el.id.toString()}}))
//     return {
//         paths,
//         fallback: true
//     }
// }

