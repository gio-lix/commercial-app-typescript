import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {API_URL} from "../config";
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";
import {useSelector} from "react-redux";
import {fetchData} from "../redux/reducer/fetchdata";

const Home: NextPage = () => {
    const {products} = useSelector((data: any) => data.fetchData)
    console.log(products)

    return (
        <div>
            {products?.map((el: any) => (
                <div key={el.id}>
                    <p>{el.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
export const getServerSideProps = wrapper.getServerSideProps(store =>  async (ctx: any) => {
    await store.dispatch(fetchingData())
    return {
        props: {data: null}
    }
})