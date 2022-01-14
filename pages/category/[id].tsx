import {FC} from "react"
import {NextPage} from "next";
import Layout from "../../components/Layout";
import {wrapper} from "../../redux/store";
import {fetchingDataId} from "../../redux/actions";
import {useSelector} from "react-redux";


const item : NextPage = () => {
    const {productsById} = useSelector((data: any) => data.fetchData)
    console.log('productsById', productsById)
  return (
     <Layout>
        <div className='grid grid-cols-2 mt-10'>
            <div className='flex justify-center'>
                <img src={productsById.image} className='w-44' alt="img"/>
            </div>
            <div>
                <p className='text-3xl font-semibold text-gray-400'>{productsById.category}</p>
                <p className='text-xl text-gray-600'>{productsById.title}</p>
                <p className='text-gray-600 font-bold'>rating {productsById.rating.rate}</p>
                <p className='text-gray-600 font-bold my-5'><span className='text-xl'>$</span> {productsById.price}</p>
                <p className='text-gray-400 text-cm'> {productsById.description} </p>
                <div className='flex justify-center my-3 space-x-3'>
                    <button className='px-2 py-0.5 font-semibold border border-gray-500 text-gray-500'>Add to cart</button>
                    <button  className='px-2 py-0.5 text-white bg-gray-500 font-semibold'>Go to cart</button>
                </div>
            </div>
        </div>
     </Layout>
  )
}
export default item
export const getServerSideProps = wrapper.getServerSideProps(store => async ({query}: any) => {
    await store.dispatch(fetchingDataId(query.id))
    return {props: {}}
})