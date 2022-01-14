import type {NextPage} from 'next'
import {wrapper} from "../redux/store";
import {fetchingData} from "../redux/actions";
import Layout from "../components/Layout";
import Image from "next/image";
import image from '../public/img.jpg'

const Home: NextPage = () => {


    return (
        <Layout>
            <div className='w-full h-[500px] relative'>
                <Image src={image} layout='fill' loading='lazy' className='absolute' alt='image' />
                <div className='absolute w-full h-full flex items-center px-14 top-0 z-10 text-gray-400'>
                    <div>
                        <p className='text-white uppercase text-3xl'>New season arrivals</p>
                        <p className='text-white uppercase text-xl'> check put all trends </p>
                    </div>
                </div>
                {/*<img src={image} alt="img"/>*/}
            </div>

        </Layout>
    )
}

export default Home
