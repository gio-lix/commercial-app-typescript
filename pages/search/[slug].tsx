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
    console.log(searchResult?.filter((el: any) => console.log(el.title.toLowerCase())))
    const dataF = searchResult?.filter((el: any) => el.title.toLowerCase().includes(query.slug))


    console.log('loading',loading)

    return (
        <Layout>
            <div className=' w-full h-52 mt-20 flex justify-center '>
                <p className='text-gray-400 text-3xl'>Search result</p>
            </div>
            {loading && (
                <div className='flex justify-center'>
                    <p>Loading</p>
                </div>
            )}
            {(!loading && dataF?.length > 0 ) && (
                <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  justify-center gap-y-6 '>
                    {dataF?.map((el: IProductsTypes) => (
                        <ProductsPage str={el} key={el.id}/>
                    ))}
                </div>
            )}
            {(!loading && dataF?.length === 0 ) && (
                <div className='flex justify-center'>
                    <p>Not Found</p>
                </div>
            )}

        </Layout>
    )
}
export default SearchPage
