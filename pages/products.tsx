import {FC, useEffect, useState} from "react"
import {NextPage} from "next";
import Layout from "../components/Layout";
import {useDispatch, useSelector} from "react-redux";
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";
import {ShoppingCartIcon} from "@heroicons/react/solid";


const Products: FC<NextPage> = () => {
    const {products} = useSelector((data: any) => data.fetchData)
    const [filter, setFilter] = useState<any>(products);

    const filterData = (pro: string) => {
        const productsData = products.filter((el: any) => el.category === pro)
       setFilter(productsData)
    }
  return (
     <Layout>
        <div className='px-2 ms:px-6 lg:px-14 '>
            <p className='text-3xl text-center my-4'>Latest Products</p>
            <hr/>
            <div className='flex space-x-3 justify-center mt-10'>
                <button onClick={() => setFilter(products)} className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>All</button>
                <button onClick={() => filterData("men's clothing")} className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Men&apos;s Clothing</button>
                <button onClick={() => filterData("women's clothing")} className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Women&apos;s Clothing</button>
                <button onClick={() => filterData("jewelery")} className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Jewelery</button>
                <button onClick={() => filterData("electronics")} className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Electronic</button>
            </div>
            <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center gap-y-6 my-6 '>
                {filter?.map((el: any) => (
                    <div key={el.id} className='flex justify-center items-center h-96 group'>
                        <div className='relative w-full h-full flex flex-col w-64 border border-gray-200 px-1  hover:shadow-2xl'>
                            <img src={el.image} alt="img" className='h-60' />
                            <p className='text-sm font-semibold'>{el.title}</p>
                            <p>$ {el.price}</p>
                            <button className='hidden group-hover:inline-flex justify-center  items-center text-white absolute bottom-6 right-4  rounded-full w-8 h-8 bg-green-500'>
                                <ShoppingCartIcon className='w-6 h-6 white-center'/>
                            </button>
                            <div className='absolute bottom-6 w-full flex justify-center'>
                                <button className='w-20 text-gray-600 py-1 border border-gray-400 m-auto text-sm hover:bg-gray-500 hover:text-white font-semibold'>
                                    Add Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </Layout>
  )
}
export default Products
export const getStaticProps = wrapper.getStaticProps(store =>  async (ctx: any) => {
    await store.dispatch(fetchingData())
    return {
        props: {data: null},
    }
})
