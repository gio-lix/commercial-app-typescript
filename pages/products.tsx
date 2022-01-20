import {useEffect, useRef, useState} from "react"
import {NextPage} from "next";
import Layout from "../components/Layout";
import {END} from "redux-saga";
import {requestProducts} from "../redux/reducers/products/action-type";
import {wrapper} from "../redux/store";
import {useSelector} from "react-redux";
import ProductsPage from "../components/page/ProductsPage";
import {IProductsTypes} from "../redux/types";


const Products: NextPage = () => {
    const {products} = useSelector((data:any) => data.productReducer)
    const [filter, setFilter] = useState<IProductsTypes[]>(products);

    const filterData = (pro: string) => {
        const productsData = products.filter((el: IProductsTypes) => el.category === pro)
        setFilter(productsData)
    }



    return (
        <Layout>
            <div className='px-2 ms:px-6 lg:px-14 '>
                <p className='text-3xl text-center my-4'>Latest Products</p>
                <hr/>
                <div className='flex space-x-3 justify-center mt-10'>
                    <button onClick={() => setFilter(products)}
                            className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>All
                    </button>
                    <button onClick={() => filterData("men's clothing")}
                            className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Men&apos;s
                        Clothing
                    </button>
                    <button onClick={() => filterData("women's clothing")}
                            className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Women&apos;s
                        Clothing
                    </button>
                    <button onClick={() => filterData("jewelery")}
                            className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Jewelery
                    </button>
                    <button onClick={() => filterData("electronics")}
                            className='px-5 py-1 text-sm rounded  border border-gray-600 hover:bg-gray-800 hover:text-white'>Electronic
                    </button>
                </div>
                <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center gap-y-6 my-6 '>
                    {filter?.map((el: IProductsTypes) => (
                        <ProductsPage str={el} key={el.id}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export default Products

export const getStaticProps = wrapper.getStaticProps(store => async (ctx: any) => {
    store.dispatch(requestProducts())
    store.dispatch(END)
    await store.sagaTask.toPromise()
    return {
        props: {data: null},
        revalidate: 1
    }
})

