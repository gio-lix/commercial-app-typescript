import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {API_URL} from "../config";
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";

const Home: NextPage = ({data}: any) => {
    console.log(data)

    return (
        <div>

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