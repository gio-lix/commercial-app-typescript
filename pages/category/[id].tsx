import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Layout from "../../components/Layout";
import {wrapper} from "../../redux/store";
import {fetchingDataId} from "../../redux/actions";
import {useSelector} from "react-redux";
import {fetchProducts, fetchProductsId} from "../api";


const Item: NextPage = () => {
    const {productsById} = useSelector((data: any) => data.fetchData)
    console.log(productsById)
  return (
     <Layout>
        <div className='grid grid-cols-2 mt-10'>
            <div className='flex justify-center'>
                <img src={productsById?.image} className='w-44' alt="img"/>
            </div>
            <div>
                <p className='text-3xl font-semibold text-gray-400'>{productsById?.category}</p>
                <p className='text-xl text-gray-600'>{productsById?.title}</p>
                <p className='text-gray-600 font-bold'>rating {productsById?.rating.rate}</p>
                <p className='text-gray-600 font-bold my-5'><span className='text-xl'>$</span> {productsById?.price}</p>
                <p className='text-gray-400 text-cm'> {productsById?.description} </p>
                <div className='flex justify-center my-3 space-x-3'>
                    <button className='px-2 py-0.5 font-semibold border border-gray-500 text-gray-500'>Add to cart</button>
                    <button  className='px-2 py-0.5 text-white bg-gray-500 font-semibold'>Go to cart</button>
                </div>
            </div>
        </div>
     </Layout>
  )
}

export default Item

// export const getStaticProps: GetStaticProps = async ({query}: any) => {
//     console.log(query)
//     const data = await fetchProductsId.getProductsId('1')
//     return {
//         props: {data}
//     }
// }
export const getStaticProps = wrapper.getStaticProps(store => async ({params}: any) => {
    await store.dispatch(fetchingDataId(params.id))
    return {props: {}}
})
export const getStaticPaths = async () => {
    const data = await fetchProducts.getProducts()
    const paths = data.map((el: any) => ({params: {id: el.id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

