import {FC, useEffect, useState} from "react"
import {NextPage} from "next";
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";


const Products: FC<NextPage> = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //   const data = async () => {
    //       try {
    //         dispatch(fetchingData())
    //       } catch (err) {
    //
    //       }
    //   }
    //   data()
    // }, []);

    const [loading, setLoading] = useState(false);
    const {products} = useSelector((data: any) => data.fetchData)
    // const {loading} = useSelector((state: any) => state.loadingReduce)
    const [filter, setFilter] = useState(products);
    // const [loading, setLoading] = useState();



  return (
     <Layout>
        <div>
            <p className='text-3xl text-center my-4'>Latest Products</p>
            <hr/>
            <div className='flex space-x-3 justify-center mt-10'>
                <button className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>All</button>
                <button className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Men&apos;s Clothing</button>
                <button className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Women&apos;s Clothing</button>
                <button className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Jewelery</button>
                <button className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Electronic</button>
            </div>
            {!products.length && <p>loading</p>}
            {/*{filter?.map((el: any) => (*/}
            {/*    <div key={el.id}>*/}
            {/*        <p>{el.title}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
     </Layout>
  )
}
export default Products
export const getStaticProps = wrapper.getStaticProps(store =>  async (ctx: any) => {
    await store.dispatch(fetchingData())
    return {
        props: {data: null}
    }
})
