import type {NextPage} from 'next'
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";
import {useSelector} from "react-redux";
import Layout from "../components/Layout";
import Image from "next/image";
import image from '../public/img.jpg'

const Home: NextPage = () => {
    const {products} = useSelector((data: any) => data.fetchData)
    const {loading} = useSelector((state: any) => state.loadingReduce)
    console.log('loading',loading)

    return (
        <Layout>
            <div className='w-full h-[500px] relative'>
                <Image src={image} layout='fill' className='absolute' alt='image' />
                <div className='absolute top-0 z-10 text-gray-400'>
                    <p className='text-gray-900'> title</p>
                    <p>This is a wider cart with supporting text below as a natural lead-in to
                        additional content. this content is the a little bit longer.
                    </p>
                </div>
                {/*<img src={image} alt="img"/>*/}
            </div>
            {products?.map((el: any) => (
                <div key={el.id}>
                    <p>{el.title}</p>
                </div>
            ))}
        </Layout>
    )
}

export default Home
export const getServerSideProps = wrapper.getServerSideProps(store =>  async (ctx: any) => {
    await store.dispatch(fetchingData())
    return {
        props: {data: null}
    }
})