import {FC, useEffect, useState} from "react"
import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "../../redux/store";
import {requestProductsById} from "../../redux/reducers/products/action-type";
import {END} from "redux-saga";
import Layout from "../../components/Layout";
import {fetchProducts} from "../api";
import {useRouter} from "next/router";
import {log} from "util";
import ProductsPage from "../../components/page/ProductsPage";
import {IProductsTypes} from "../../redux/types";
import {any} from "prop-types";


const SearchPage: NextPage = () => {
    const [searchResult, setSearchResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const {query} = useRouter()

    useEffect(() => {
        const dta = async () => {
            setLoading(true)
            const data = await fetchProducts.getProducts()
            setLoading(false)
            setSearchResult(data)
        }
        dta()
    }, [query.slug])

    const dataFunc = (item: {}[]) => {
        return item?.filter((el: any) => el.title.toLowerCase().includes(query.slug))
            .sort((a:any, b:any) => b.price - a.price)
    }

    return (
        <Layout>
            <div className=' w-full h-52 mt-20 flex justify-center '>
                <p className='text-gray-400 text-3xl'>Search result</p>
            </div>
            {loading && (
                <div className='flex justify-center'>
                    <p className='text-2xl text-gray-500'>Loading... </p>
                </div>
            )}
            {(!loading && dataFunc(searchResult)?.length > 0 ) && (
                <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center gap-y-6 '>
                    {dataFunc(searchResult)?.map((el: IProductsTypes) => (
                        <ProductsPage str={el} key={el.id}/>
                    ))}
                </div>
            )}
            {(!loading && dataFunc(searchResult)?.length === 0 ) && (
                <div className='flex justify-center'>
                    <p>Not Found</p>
                </div>
            )}
        </Layout>
    )
}
export default SearchPage
